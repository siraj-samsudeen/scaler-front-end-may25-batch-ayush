import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./styles.css";
import NotFound from "./components/NotFound";
import ProductShow from "./components/ProductShow";
import CartContextProvider from "./context/cart";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  return (
    <div>
      <CartContextProvider>
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route
            path="/"
            element={<ProductList defaultSelectedCategory={selectedCategory} />}
          />
          <Route
            path="/categories/:category"
            element={<ProductList defaultSelectedCategory={selectedCategory} />}
          />
          <Route path="/products/:productId" element={<ProductShow />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}
