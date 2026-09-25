import './index.css'
import { useState } from 'react'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item])
  }

  const removeFromCart = (indexToRemove) => {
    setCart((currentCart) => currentCart.filter((_, index) => index !== indexToRemove))
  }

  const clearCart = () => setCart([])

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar cartCount={cart.length} />
      <main>
        <Hero onViewMenu={scrollToMenu} />
        <About />
        <Menu
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          onClearCart={clearCart}
        />
        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Visit Us</h2>
          <p>📍 FOOD COURT, behind UTS Food Court DLF, Gachibowli</p>
          <p>🍵 Come and enjoy your chai!</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
