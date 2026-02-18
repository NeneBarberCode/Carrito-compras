import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <h1>Tienda con Context API</h1>
      <ProductList />
      <Cart />
    </>
  );
}

export default App;
