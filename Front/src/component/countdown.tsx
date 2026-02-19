import { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date('2025-11-15T18:00:00+07:00').getTime(); // gate open WIB

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '3rem 0' }}>
      <h3 style={{ fontSize: '1.6rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Open Gate In
      </h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} style={{
            background: 'rgba(20,20,60,0.4)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '12px',
            padding: '1.2rem 1.8rem',
            minWidth: '110px',
          }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 700, color: 'var(--cyan)' }}>{value.toString().padStart(2, '0')}</div>
            <div style={{ fontSize: '1rem', color: 'var(--muted)', textTransform: 'uppercase' }}>{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}