import { useEffect, useState } from 'react';

const nerdQuotes = ['E=mc²', 'Warp', '1UP', 'Δt'];

const QuantumCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [quote, setQuote] = useState(nerdQuotes[0]);

  useEffect(() => {
    const target = typeof globalThis?.addEventListener === 'function' ? globalThis : null;

    if (!target) {
      return undefined;
    }

    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
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

  return (
    <div
      className="quantum-cursor"
      style={{ transform: `translate(${position.x - 27}px, ${position.y - 27}px)` }}
    >
      {quote}
    </div>
  );
};

export default QuantumCursor;
