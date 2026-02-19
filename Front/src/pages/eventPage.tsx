import Navbar from '../component/navbar';
import Countdown from '../component/countdown';
import TicketCard from '../component/ticketcard';
import YouTubeEmbed from './youtube';

export default function EventPage() {
  return (
    <>
      <div className="bg-animation" />

      <Navbar />

      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section style={{
          height: '100vh',
          minHeight: '900px',
          background: `linear-gradient(rgba(10,12,30,0.7), rgba(6,8,20,0.92)), url('https://hololive.hololivepro.com/wp-content/uploads/2025/08/250817_main.webp') center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{ maxWidth: '1100px', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
            <h1 style={{
              fontFamily: 'Orbitron',
              fontSize: 'clamp(5rem, 12vw, 14rem)',
              fontWeight: 900,
              background: 'var(--gradient-title)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 60px rgba(124,58,237,0.7)',
              marginBottom: '1rem',
              letterSpacing: '8px',
            }}>
              CHROMATIC FUTURE
            </h1>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'white',
              marginBottom: '2.5rem',
            }}>
              hololive Indonesia 5th Anniversary LIVE
            </h2>

            <Countdown />

            <div style={{ marginTop: '3rem' }}>
              <button className="btn btn-gradient" style={{ margin: '0 1.2rem 1rem', fontSize: '1.3rem' }}>
                Beli Tiket Sekarang
              </button>
              <button className="btn btn-outline" style={{ margin: '0 1.2rem', fontSize: '1.3rem' }}>
                Detail Acara
              </button>
            </div>
          </div>
        </section>

{/* Rule of event */}
<section id="info" style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            marginBottom: '5rem',
            background: 'var(--gradient-title)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            Informasi Acara
          </h2>

          <div style={{ maxWidth: '1000px', margin: '0 auto', color: 'var(--muted)', lineHeight: '1.8', fontSize: '1.2rem' }}>
            <p>• All categories are seated</p>
            <p>• Ticket Include 1-Day pass Comifuro 21 - Day 1 (15 November  2025)</p>
            <p>• Ticket price excludes government tax 10% and handling fee.</p>
            <p>• Actual Location and / or Size May differ Slightly</p>

            <p>• A maximum of one purchase is 4 (four) tickets. </p>
            <p>• Please make sure email and personal data is correct before checking out, because ticket will be send to email. </p>
          </div>
        </section>

        {/* Tickets Section */}
        <section id="tickets" style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            marginBottom: '5rem',
            background: 'var(--gradient-title)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            Pilih Kategori Tiket
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1300px',
            margin: '0 auto',
          }}>
            <TicketCard
              name="Regular"
              price="Rp 450.000"
              color="#7c3aed"
              features={["Akses venue", "Merch pack dasar", "Early entry", "Penlight gratis"]}
            />
            <TicketCard
              name="VIP"
              price="Rp 900.000"
              color="#d946ef"
              features={["Semua Regular", "Meet & Greet", "Merch eksklusif", "Prioritas seat", "Hi-touch"]}
            />
            <TicketCard
              name="Premium"
              price="Rp 1.500.000"
              color="#00f0ff"
              features={["Semua VIP", "Soundcheck access", "Signed polaroid", "Special gift", "Sold Out"]}
              soldOut
            />
          </div>
        </section>

{/* Trailer */}
        <YouTubeEmbed />

        {/* Footer / Sponsors */}
        <footer style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'var(--bg-dark)',
          borderTop: '1px solid rgba(124,58,237,0.2)',
        }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
            Supported by Pocky • Karaoke Manekineko • ACL • © 2025 hololive production
          </p>
        </footer>
      </main>
    </>
  );
}