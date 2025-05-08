import { createContext, useState } from 'react';
import './App.css';
import { NavBar } from './nav-bar';
import { MainComponent } from './main-content';
import { ItemPages } from './item-pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartPage } from './cartpage';

export const CartContext = createContext({});

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, cartItems, setCartItems }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/item/:id" element={<ItemPages />} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
