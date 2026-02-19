export default function YouTubeEmbed() {
  // Use the official trailer embed (from hololive Indonesia channel)
  // Video ID: 2TEzg-F-aLg → https://www.youtube.com/watch?v=2TEzg-F-aLg
  const videoId = '2TEzg-F-aLg';

  // Alternative: partial concert premiere → 'ScI02LHlT-w'
  // const videoId = 'ScI02LHlT-w';

  return (
    <section id="trailer" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(to bottom, var(--bg), var(--bg-dark))',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
        marginBottom: '3rem',
        background: 'var(--gradient-title)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}>
        Trailer Resmi & Highlight
      </h2>

      <p style={{
        maxWidth: '800px',
        margin: '0 auto 3rem',
        fontSize: '1.2rem',
        color: 'var(--muted)',
      }}>
        Saksikan teaser dan cuplikan dari hololive Indonesia 5th Anniversary LIVE "Chromatic Future"!
        <br />
        Full experience available on official channels and platforms.
      </p>

      <div style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        maxWidth: '1000px',
        margin: '0 auto',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(124,58,237,0.4)',
        background: '#000',
      }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
          title="hololive Indonesia 5th Anniversary LIVE Chromatic Future Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gradient"
          style={{ fontSize: '1.2rem' }}
        >
          Tonton di YouTube
        </a>
      </div>
    </section>
  );
}