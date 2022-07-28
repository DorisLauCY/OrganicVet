import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Checkout from './Checkout';
import About from './About';
import Contact from './Contact';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      
    <Header />
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/checkout">CheckOut</Link> */}
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productlist' element={<ProductList/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/product' element={<ProductDetail/>} >
            <Route path=":id" element={<ProductDetail/>} />
          </Route>
          <Route path="*" element={<p>404</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
