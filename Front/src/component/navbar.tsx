import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(10, 12, 30, 0.75)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(124,58,237,0.25)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.2rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ fontFamily: 'Orbitron', fontSize: '1.8rem', fontWeight: 900, background: 'var(--gradient-title)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
          CHROMATIC FUTURE
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#tickets" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>Tickets</a>
          <a href="#info" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>Info</a>
          <a href="#stream" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>Watch Party</a>

          {/* Mobile menu toggle (simple version) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.8rem', cursor: 'pointer', display: 'none' }} // add media query later if needed
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}