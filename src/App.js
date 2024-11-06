import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  // Cart Functionallty
  const [cardItems, setCardItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cardItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCardItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    // First for loop is help to iterate the cart items and second for loop it will iterate the product size
    for (const items in cardItems) {
      for (const item in cardItems[items]) {
        try {
          if (cardItems[items][item] > 0) {
            totalCount += cardItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  // Update and remove the cart items
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cardItems);

    cartData[itemId][size] = quantity;
    setCardItems(cartData);
  };

  return (
    <div className="px-1 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar setShowSearch={setShowSearch} getCartCount={getCartCount} />
      <SearchBar
        search={search}
        setSearch={setSearch}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/collection"
          element={<Collection showSearch={showSearch} search={search} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product/:productId"
          element={<Product addToCart={addToCart} cardItems={cardItems} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cardItems} updateQuantity={updateQuantity} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
