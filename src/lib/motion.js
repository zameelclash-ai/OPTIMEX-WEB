// Lightweight scroll motion — no libraries.
// The page is complete without this file: hidden start states only apply
// under html.js-motion, which index.html adds when reduced motion is off.

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function initMotion() {
  const root = document.documentElement;
  if (!root.classList.contains('js-motion')) return () => {};

  // 1. Reveal on enter -------------------------------------------------
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  const scan = () =>
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el));
  scan();
  // Re-scan when React swaps content (filters, etc.)
  const mo = new MutationObserver(scan);
  mo.observe(document.getElementById('root'), { childList: true, subtree: true });

  // 2. Counters ---------------------------------------------------------
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        const el = e.target;
        const to = Number(el.dataset.count);
        const dur = 1600;
        const t0 = performance.now();
        const tick = (now) => {
          const p = clamp((now - t0) / dur, 0, 1);
          el.textContent = Math.round(to * easeOutExpo(p));
          if (p < 1) requestAnimationFrame(tick);
        };
        el.textContent = '0';
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));

  // 3. Scroll-linked effects -------------------------------------------
  const progress = document.querySelector('.progress');
  let ticking = false;

  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;

    if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;

    // Words light up as the paragraph passes through the screen
    document.querySelectorAll('[data-scrub]').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -50 || r.top > vh + 50) return;
      const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.3), 0, 1);
      const words = el.querySelectorAll('.w');
      const lit = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < lit));
    });

    // Gentle parallax
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const speed = Number(el.dataset.parallax) || 0.1;
      const offset = (r.top + r.height / 2 - vh / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  return () => {
    io.disconnect();
    cio.disconnect();
    mo.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

