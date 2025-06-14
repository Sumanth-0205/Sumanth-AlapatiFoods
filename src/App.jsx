import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React,{useState} from "react";
import './App.css'
import Footer from './components/Footer';
import Home from './components/Home';
import Orders from './components/Orders';
import Products from './components/Products';

import { CartProvider } from './components/CartContext'; // Corrected path

import Cart from "./components/Cart";

function App() {

  return (

    <>
      <Home />

      <CartProvider>
        
        <Routes>
          {/* <Route path="" element={<Home/>}></Route> */}
          <Route path="/products" element={<Products />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </CartProvider>
      
      <Footer />
    </>

  );
}

export default App
