function Navbar({ cartCount }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Babai Chai home">
        <span aria-hidden="true">🍵</span> BABAI CHAI
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a className="cart-link" href="#cart" aria-label={`Shopping cart with ${cartCount} items`}>
          🛒 Cart <span className="cart-count">{cartCount}</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
