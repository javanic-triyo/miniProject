interface TicketProps {
  name: string;
  price: string;
  color: string;
  features: string[];
  soldOut?: boolean;
}

export default function TicketCard({ name, price, color, features, soldOut = false }: TicketProps) {
  return (
    <div style={{
      background: 'rgba(15,15,50,0.45)',
      backdropFilter: 'blur(14px)',
      border: `1px solid ${color}50`,
      borderRadius: '20px',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-12px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {soldOut && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '-50px',
          background: '#dc2626',
          color: 'white',
          padding: '0.6rem 5rem',
          transform: 'rotate(45deg)',
          fontWeight: 'bold',
          fontSize: '1.1rem',
        }}>
          SOLD OUT
        </div>
      )}

      <h3 style={{ fontSize: '2.4rem', color, marginBottom: '1.2rem', fontWeight: 700 }}>
        {name}
      </h3>

      <div style={{ fontSize: '3.5rem', fontWeight: 800, margin: '1rem 0', color: 'white' }}>
        {price}
      </div>

      <ul style={{ listStyle: 'none', margin: '2rem 0', padding: 0, color: 'var(--muted)', fontSize: '1.1rem' }}>
        {features.map((feat, i) => (
          <li key={i} style={{ margin: '0.9rem 0' }}>✓ {feat}</li>
        ))}
      </ul>

      <button
        className={`btn ${soldOut ? 'btn-outline' : 'btn-gradient'}`}
        disabled={soldOut}
        style={{ marginTop: '1.5rem', width: '85%', padding: '1.1rem' }}
      >
        {soldOut ? 'Sold Out' : 'Beli Tiket'}
      </button>
    </div>
  );
}