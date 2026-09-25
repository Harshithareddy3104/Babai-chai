import './index.css'

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>🍵 BABAI CHAI</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div>
          <h1>Welcome to BABAI CHAI ☕</h1>
          <p>
            Enjoy delicious chai, snacks and a relaxing atmosphere
            with your friends.
          </p>

          <button>View Menu</button>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About BABAI CHAI</h2>

        <p>
          BABAI CHAI is a cozy place to enjoy hot chai and tasty snacks.
          Perfect for spending time with friends and family.
        </p>

        <div className="shop-info">
          <p>⭐ 4.4 Rating</p>
          <p>📍 DLF Gachibowli</p>
          <p>🕐 Open until 1 AM</p>
        </div>
      </section>

      <section id="menu" className="menu-section">
        <h2>Our Menu</h2>

        <div className="food-container">
          <div className="food-card">
            <h3>☕ Irani Chai</h3>
            <p>Traditional hot chai</p>
            <strong>₹30</strong>
            <button>Add to Cart</button>
          </div>

          <div className="food-card">
            <h3>🥤 Special Chai</h3>
            <p>Our special refreshing chai</p>
            <strong>₹40</strong>
            <button>Add to Cart</button>
          </div>

          <div className="food-card">
            <h3>🍪 Biscuits</h3>
            <p>Perfect combination with chai</p>
            <strong>₹20</strong>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Visit Us</h2>
        <p>📍 FOOD COURT, behind UTS Food Court DLF, Gachibowli</p>
        <p>🍵 Come and enjoy your chai!</p>
      </section>

      <footer>
        <p>© 2026 BABAI CHAI. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App