import * as THREE from '../vendor/three.module.min.js';
import { RoomEnvironment } from '../vendor/RoomEnvironment.js';
import { buildGlasses, buildContactLens } from './glasses.js';
import { HERO_PRESETS } from './presets.js';

function shadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, 'rgba(20,16,8,0.42)');
  grad.addColorStop(0.45, 'rgba(20,16,8,0.16)');
  grad.addColorStop(1, 'rgba(20,16,8,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

/** Shared studio: renderer + soft-box environment + key/rim lights + contact shadow. */
export function createStudio(canvas, { alpha = true, fov = 24, preserveDrawingBuffer = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha, preserveDrawingBuffer, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.94;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
  scene.environment = envTex;

  const key = new THREE.DirectionalLight('#fff4e0', 1.5);
  key.position.set(-6, 9, 12);
  const rim = new THREE.DirectionalLight('#ffd9a0', 1.1);
  rim.position.set(9, 3, -8);
  const fill = new THREE.DirectionalLight('#dfe8ff', 0.7);
  fill.position.set(8, -2, 10);
  scene.add(key, rim, fill);

  const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false });
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(24, 9), shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -3.6;
  scene.add(shadow);

  const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 200);
  const stage = new THREE.Group();
  scene.add(stage);

  function resize(w, h, dpr = Math.min(window.devicePixelRatio || 1, 2), fit = 1.2) {
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const tan = Math.tan((fov * Math.PI) / 360);
    const dist = Math.max(15.4 / (camera.aspect * 2 * tan), 9.8 / (2 * tan));
    camera.position.set(0, 0.55, dist * fit + 7.2);
    camera.lookAt(0, -0.2, 0);
    camera.updateProjectionMatrix();
  }

  function dispose() {
    stage.children.slice().forEach((c) => c.userData.dispose && c.userData.dispose());
    envTex.dispose();
    pmrem.dispose();
    shadowMat.map.dispose();
    renderer.dispose();
  }

  return { renderer, scene, camera, stage, shadow, resize, dispose };
}

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Live hero: auto-rotating showcase that swaps between frame shapes. */
export function mountHero(container, { onChange, autoplay = true } = {}) {
  const canvas = document.createElement('canvas');
  canvas.className = 'hero3d-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  container.appendChild(canvas);

  const studio = createStudio(canvas);
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  const makePair = (i) => {
    const g = buildGlasses(HERO_PRESETS[i].cfg);
    studio.stage.add(g);
    return g;
  };
  let current = makePair(0);
  let leaving = null;
  let enterT = 1;
  let leaveT = 1;
  let dir = 1;
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  let scrollP = 0;
  let visible = true;
  let raf = 0;
  let last = performance.now();
  let clock = 0;
  let timer = 0;

  const fit = () => {
    const r = container.getBoundingClientRect();
    studio.resize(Math.max(2, r.width), Math.max(2, r.height));
  };
  fit();
  const ro = new ResizeObserver(fit);
  ro.observe(container);

  const goTo = (i) => {
    if (i === index || enterT < 1) return;
    dir = i > index || (index === HERO_PRESETS.length - 1 && i === 0) ? 1 : -1;
    leaving = current;
    leaveT = 0;
    index = i;
    current = makePair(i);
    enterT = -0.22;
    onChange && onChange(i);
  };

  const onMove = (e) => {
    const r = container.getBoundingClientRect();
    mouse.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    mouse.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
  };
  const onLeave = () => { mouse.tx = 0; mouse.ty = 0; };
  const onScroll = () => { scrollP = Math.min(1.2, window.scrollY / Math.max(1, window.innerHeight)); };
  container.addEventListener('pointermove', onMove);
  container.addEventListener('pointerleave', onLeave);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
  });
  io.observe(container);

  const place = (g, t, d, rot) => {
    // t: 0 → hidden, 1 → centred
    const e = ease(t);
    g.position.x = (1 - e) * 7 * d;
    g.position.y = (1 - e) * -0.4;
    g.scale.setScalar(0.82 + 0.18 * e);
    g.rotation.y = rot + (1 - e) * 0.9 * d;
    g.rotation.x = 0.09 + mouse.y * 0.06;
  };

  function frame(now) {
    if (!visible) { raf = 0; return; }
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    clock += dt;
    mouse.x += (mouse.tx - mouse.x) * 0.06;
    mouse.y += (mouse.ty - mouse.y) * 0.06;
    const sway = reduced ? -0.3 : Math.sin(clock * 0.45) * 0.62 - 0.28;
    const rot = sway + mouse.x * 0.28 + scrollP * 0.6;
    if (enterT < 1) enterT = Math.min(1, enterT + dt / 1.15);
    place(current, Math.max(0, enterT), dir, rot);
    current.visible = enterT > 0;
    current.position.y += Math.sin(clock * 0.9) * 0.12;
    if (leaving) {
      leaveT = Math.min(1, leaveT + dt / 0.8);
      const e = 1 - leaveT;
      place(leaving, e, -dir, rot);
      if (leaveT >= 1) {
        studio.stage.remove(leaving);
        leaving.userData.dispose && leaving.userData.dispose();
        leaving = null;
      }
    }
    studio.shadow.material.opacity = 0.75 + Math.sin(clock * 0.9) * 0.05;
    studio.renderer.render(studio.scene, studio.camera);
    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  if (autoplay && !reduced) {
    timer = setInterval(() => { if (visible && !document.hidden) goTo((index + 1) % HERO_PRESETS.length); }, 6200);
  }

  return {
    goTo,
    pauseAuto() { clearInterval(timer); },
    destroy() {
      clearInterval(timer);
      cancelAnimationFrame(raf);
      raf = 0;
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerleave', onLeave);
      studio.dispose();
      canvas.remove();
    },
  };
}

/** Used by tools/render.js — draw one product at a fixed pose. */
export function renderProduct(canvas, cfg, pose, size = [1200, 900]) {
  const studio = createStudio(canvas, { preserveDrawingBuffer: true });
  studio.resize(size[0], size[1], 1, 1.36);
  let obj;
  if (cfg.contact) {
    obj = buildContactLens();
    obj.rotation.set(0.62, -0.5 + pose.yaw * -0.35, 0);
    obj.scale.setScalar(1.6);
    studio.shadow.position.y = -2.4;
  } else {
    obj = buildGlasses(cfg);
    obj.rotation.set(pose.pitch, pose.yaw, 0);
  }
  studio.stage.add(obj);
  studio.renderer.render(studio.scene, studio.camera);
  const url = canvas.toDataURL('image/png');
  studio.dispose();
  return url;
}
