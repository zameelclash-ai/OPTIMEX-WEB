// Renders every product to a transparent PNG:  node tools/render-products.mjs
// Needs: playwright + a Chromium with WebGL (software rendering is fine).
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const out = join(root, 'public', 'images', 'products');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css' };
const server = createServer(async (req, res) => {
  try {
    const p = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
    const buf = await readFile(join(root, p));
    res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' });
    res.end(buf);
  } catch { res.writeHead(404); res.end(); }
}).listen(0);
const port = server.address().port;

await mkdir(out, { recursive: true });
const only = process.argv.slice(2);
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || undefined,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
});
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
page.on('console', (m) => m.type() === 'error' && console.log('[page]', m.text()));
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
await page.goto(`http://127.0.0.1:${port}/tools/render.html`);
await page.waitForFunction('window.__ready === true', null, { timeout: 30000 });
const names = await page.evaluate('window.__names');
for (const name of names) {
  if (only.length && !only.includes(name)) continue;
  const views = name === 'rb-01' || name === 'rb-02' ? ['a', 'b', 'front'] : ['a', 'b'];
  for (const v of views) {
    const url = await page.evaluate(([n, vw]) => window.__render(n, vw), [name, v]);
    await writeFile(join(out, `${name}-${v}.png`), Buffer.from(url.split(',')[1], 'base64'));
    console.log('wrote', `${name}-${v}.png`);
  }
}
await browser.close();
server.close();
