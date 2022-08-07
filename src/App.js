
import './App.css';
import Authorisation from './Component/Authorisation';
import CartDetails from './Component/CartDetails';
import Checkout from './Component/Checkout';
import Navbar from './Component/Navbar';
import NavbarBottom from './Component/NavbarBottom';
import Product from './Component/Product';

function App() {
  return (
    <>
    <Navbar/>
    <Product/>
    <NavbarBottom/>
    <CartDetails/>
    <Authorisation/>
    <Checkout/>
    </>
  );
}

export default App;
