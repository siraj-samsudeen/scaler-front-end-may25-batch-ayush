import { useState } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./styles.css";
import NotFound from "./components/NotFound";
import ProductShow from "./components/ProductShow";
import CartContextProvider from "./context/cart";
import store from "./store";

export default function App() {
  // const [selectedCategory, setSelectedCategory] = useState("electronics");
  return (
    <div>
      <Provider store={store}>
        <CartContextProvider>
          {/* <Header
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          /> */}
          <Routes>
            <Route
              path="/"
              element={[
                <Header
                // selectedCategory={selectedCategory}
                // setSelectedCategory={setSelectedCategory}
                />,
                <ProductList />
              ]}
            >
              <Route
                path="/categories/:category"
                element={
                  // <ProductList defaultSelectedCategory={selectedCategory} />
                  <ProductList />
                }
              />
              <Route path="/products/:productId" element={<ProductShow />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartContextProvider>
      </Provider>
    </div>
  );
}
