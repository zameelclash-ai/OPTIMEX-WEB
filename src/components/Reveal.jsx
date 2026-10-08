import React, { useEffect, useRef, useState } from 'react';

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fade + rise into view once. `delay` (ms) staggers siblings. */
export function Reveal({ as: Tag = 'div', delay = 0, y, className = '', style, children, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window) || prefersReduced()) {
      setOn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`rv ${on ? 'is-in' : ''} ${className}`}
      style={{ '--d': `${delay}ms`, ...(y != null ? { '--y': `${y}px` } : null), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Number that counts up the first time it scrolls into view. */
export function CountUp({ to, prefix = '', suffix = '', duration = 1700, decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(prefersReduced() ? to : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return undefined;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        const e = 1 - Math.pow(1 - p, 4);
        setVal(to * e);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Top progress line + scroll-linked parallax for any element with data-speed. */
export function ScrollEffects() {
  const bar = useRef(null);

  useEffect(() => {
    const reduced = prefersReduced();
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (reduced) return;
      const vh = window.innerHeight;
      document.querySelectorAll('[data-speed]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const dy = r.top + r.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${(-dy * parseFloat(el.dataset.speed)).toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div className="progress" aria-hidden="true"><i ref={bar} /></div>;
}

/** Locks page scroll while a modal is open. */
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [locked]);
}

/** Calls onClose when Escape is pressed while `active`. */
export function useEscape(active, onClose) {
  useEffect(() => {
    if (!active) return undefined;
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [active, onClose]);
}
