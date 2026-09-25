const menuItems = [
  {
    id: 'irani-chai',
    name: 'Irani Chai',
    description: 'Traditional hot chai',
    price: 30,
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80',
    alt: 'A warm cup of milk tea',
    icon: '☕',
  },
  {
    id: 'special-chai',
    name: 'Special Chai',
    description: 'Our special refreshing chai',
    price: 40,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    alt: 'Tea being poured into a glass',
    icon: '🥤',
  },
  {
    id: 'biscuits',
    name: 'Biscuits',
    description: 'Perfect combination with chai',
    price: 20,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    alt: 'Freshly baked biscuits on a plate',
    icon: '🍪',
  },
]

function Menu({ cart, onAddToCart, onRemoveFromCart, onClearCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0)

  return (
    <section id="menu" className="menu-section" aria-labelledby="menu-heading">
      <p className="eyebrow">Made with love</p>
      <h2 id="menu-heading">Our Menu</h2>
      <div className="food-container">
        {menuItems.map((item) => (
          <article className="food-card" key={item.id}>
            <img src={item.image} alt={item.alt} />
            <div className="food-card-content">
              <h3><span aria-hidden="true">{item.icon}</span> {item.name}</h3>
              <p>{item.description}</p>
              <strong>₹{item.price}</strong>
              <button type="button" onClick={() => onAddToCart(item)} aria-label={`Add ${item.name} to cart`}>
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      <aside id="cart" className="cart-panel" aria-labelledby="cart-heading">
        <div className="cart-header">
          <h3 id="cart-heading">Your Cart ({cart.length})</h3>
          {cart.length > 0 && <button className="text-button" type="button" onClick={onClearCart}>Clear cart</button>}
        </div>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Add a chai to get started!</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={`${item.id}-${index}`}>
                  <span>{item.name} — ₹{item.price}</span>
                  <button className="remove-button" type="button" onClick={() => onRemoveFromCart(index)} aria-label={`Remove ${item.name} from cart`}>Remove</button>
                </li>
              ))}
            </ul>
            <p className="cart-total"><strong>Total: ₹{cartTotal}</strong></p>
          </>
        )}
      </aside>
    </section>
  )
}

export default Menu
