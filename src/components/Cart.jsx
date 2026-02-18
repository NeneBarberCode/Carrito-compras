import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <>
      <h2>Carrito</h2>
      {cart.length === 0 && <p>Carrito vacio</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <strong>{item.name}</strong>
          <button onClick={() => decreaseQuantity(item.id)}>➖</button>
          <span> {item.quantity} </span>
          <button onClick={() => increaseQuantity(item.id)}>➕</button>
        </div>
      ))}
    </>
  );
}

export default Cart;
