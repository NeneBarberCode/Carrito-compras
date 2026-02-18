import { useCart } from "../context/CartContext";

function ProductList() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Teclado" },
  ];

  return (
    <div>
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          <button onClick={() => addToCart(product)}>Agregar</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
