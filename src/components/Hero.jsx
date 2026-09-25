function Hero({ onViewMenu }) {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <p className="eyebrow">Freshly brewed, always comforting</p>
        <h1 id="hero-heading">Welcome to BABAI CHAI ☕</h1>
        <p>Enjoy delicious chai, snacks and a relaxing atmosphere with your friends.</p>
        <button type="button" onClick={onViewMenu}>View Menu</button>
      </div>
    </section>
  )
}

export default Hero
