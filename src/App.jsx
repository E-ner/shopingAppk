import React from "react";
import { Shop, Cart } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { ShopingContextProvider } from "./context/ShopingContext";

const App = () => {
  return (
    <ShopingContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </ShopingContextProvider>
  );
};

export default App;
