import { useEffect, useRef, useState } from 'react';

const MAX_BURSTS = 8;
const interactiveSelectors = 'a, button, input, textarea, select, label, summary, [role="button"], [data-nerd-ignore]';
let burstCounter = 0;

const EinsteinBursts = () => {
  const [bursts, setBursts] = useState([]);
  const timers = useRef(new Map());

  useEffect(() => {
    const root = typeof globalThis?.addEventListener === 'function' ? globalThis : null;
    if (!root) {
      return undefined;
    }

    const spawnBurst = (coords) => {
      const { x, y } = coords || {};
      if (!Number.isFinite(x) || !Number.isFinite(y)) return;

      const id = ++burstCounter;
      const newBurst = { id, x, y };

      setBursts((prev) => {
        const trimmed = prev.length >= MAX_BURSTS ? prev.slice(1) : prev;
        return [...trimmed, newBurst];
      });

      const timer = setTimeout(() => {
        setBursts((prev) => prev.filter((burst) => burst.id !== id));
        timers.current.delete(id);
      }, 1300);

      timers.current.set(id, timer);
    };

    const handleClick = (event) => {
      if (event.defaultPrevented) return;
      const target = event.target?.closest?.(interactiveSelectors);
      if (target) return;
      spawnBurst({ x: event.clientX, y: event.clientY });
    };

    const handleCustomBurst = (event) => {
      spawnBurst(event.detail);
    };

    root.addEventListener('click', handleClick);
    root.addEventListener('einstein-burst', handleCustomBurst);
    return () => {
      root.removeEventListener('click', handleClick);
      root.removeEventListener('einstein-burst', handleCustomBurst);
      timers.current.forEach((timeoutId) => clearTimeout(timeoutId));
      timers.current.clear();
    };
  }, []);

  return (
    <div className="burst-layer" aria-hidden>
      {bursts.map((burst) => (
        <span key={burst.id} className="burst" style={{ left: burst.x, top: burst.y }}>
          <span className="burst-ring" />
          <span className="burst-core">E=mc²</span>
        </span>
      ))}
    </div>
  );
};

export default EinsteinBursts;
