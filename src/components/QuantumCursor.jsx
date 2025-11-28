import { useEffect, useRef, useState } from 'react';

const nerdQuotes = ['E=mc²', 'Warp', '1UP', 'Δt'];

const QuantumCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [quote, setQuote] = useState(nerdQuotes[0]);
  const [isScrolling, setIsScrolling] = useState(false);
  const positionRef = useRef(position);
  const scrollTimeoutRef = useRef();

  useEffect(() => {
    const target = typeof globalThis?.addEventListener === 'function' ? globalThis : null;

    if (!target) {
      return undefined;
    }

    const move = (event) => {
      const nextPosition = { x: event.clientX, y: event.clientY };
      positionRef.current = nextPosition;
      setPosition(nextPosition);
    };

    const pulse = setInterval(() => {
      setQuote((prev) => nerdQuotes[(nerdQuotes.indexOf(prev) + 1) % nerdQuotes.length]);
    }, 1500);

    target.addEventListener('pointermove', move);
    return () => {
      target.removeEventListener('pointermove', move);
      clearInterval(pulse);
    };
  }, []);

  useEffect(() => {
    const root = typeof globalThis?.addEventListener === 'function' ? globalThis : null;
    if (!root) {
      return undefined;
    }

    const dispatchBurst = () => {
      const dispatcher = typeof globalThis?.dispatchEvent === 'function' ? globalThis : null;
      if (!dispatcher) return;
      const { x, y } = positionRef.current || {};
      if (!Number.isFinite(x) || !Number.isFinite(y) || x < 0 || y < 0) return;
      dispatcher.dispatchEvent(
        new CustomEvent('einstein-burst', {
          detail: { x, y }
        })
      );
    };

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        dispatchBurst();
      }, 220);
    };

    root.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      root.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`quantum-cursor ${isScrolling ? 'cursor-shooting' : ''}`}
      style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
    >
      <span className="cursor-tail" />
      <span className="cursor-label">{isScrolling ? '★' : quote}</span>
    </div>
  );
};

export default QuantumCursor;
