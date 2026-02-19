import "./event.css";

export default function EventPage() {
  return (
    <div className="event-container">
      {/* Hero */}
      <div className="event-hero">
        <img
          src="https://images.ticket2u.net/events/banner/000/045/221/large_event_banner.jpg"
          alt="Event"
        />
      </div>

      {/* Title */}
      <h1 className="event-title">
        Hololive Indonesia 5th Anniversary Live: Chromatic Future
      </h1>

      <p className="event-meta">Sabtu, 20 Mar 2026 • 19:00 WIB</p>
      <p className="event-meta">Tennis Indoor Senayan, Jakarta</p>

      {/* Countdown */}
      <div className="countdown">
        {["Days", "Hours", "Mins", "Secs"].map((label) => (
          <div key={label} className="countdown-item">
            <div className="countdown-value">00</div>
            <div className="countdown-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Tickets */}
      <section className="section">
        <h2 className="section-title">Tickets</h2>

        <div className="ticket-grid">
          <div className="ticket-card">
            <div className="ticket-title">General Admission</div>
            <div className="ticket-price">Rp 250.000</div>
            <button className="ticket-btn">Buy Ticket</button>
          </div>

          <div className="ticket-card">
            <div className="ticket-title">VIP Seat</div>
            <div className="ticket-price">Rp 750.000</div>
            <button className="ticket-btn">Buy Ticket</button>
          </div>

          <div className="ticket-card">
            <div className="ticket-title">VVIP Package</div>
            <div className="ticket-price">Rp 1.500.000</div>
            <button className="ticket-btn">Buy Ticket</button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <h2 className="section-title">About the Event</h2>
        <p className="event-desc">
          Celebrate the 5th anniversary with special performances, guest stars,
          and exclusive merchandise. Enjoy live shows, interactive segments,
          and unforgettable moments.
        </p>
      </section>

      {/* Sticky Buy Button (mobile only) */}
      <div className="sticky-buy">
        <button>Buy Ticket</button>
      </div>
    </div>
  );
}
