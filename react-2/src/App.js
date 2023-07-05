/**
 * There are basically three stages / lifecycle for our component
 * 1. Mounting ( born)
 * 1.a this is the first time component gets rendered on UI
 * 1.b State initialisations happen at this stage
 *
 * 2. Update ( go through many stages or updates)
 * 2.b for example the counter values changing
 *
 * 3. Unmounting ( we die )
 * 3.a The component is removed from the DOM
 * 3.b all the state variables and values attached are gone
 */

import "./styles.css";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import { useState, useEffect, useDebugValue } from "react";

export default function App() {
  /**
   * useEffect - to sync our application with an external system
   * useState - to create and manage application state variables
   */
  const [showCounter, setShowCounter] = useState(true);

  const toggleVisibility = () => {
    setShowCounter(!showCounter);
    console.log("show counter ", showCounter);
  };
  const products = [
    {
      id: 1,
      title: "Apple iPhone 13",
      price: "79,999",
      image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
    },
    {
      id: 2,
      title: "Samsung Galaxy Note 8",
      price: "69,999",
      image:
        "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas2/Black/Gallery-01-C2-Lockup-MysticBlack-1600x1200.jpg?$product-details-jpg"
    },
    {
      id: 3,
      title: "Nokia 1100",
      price: "2,999",
      image: "https://m.media-amazon.com/images/I/41wGEmM0S4L.jpg"
    }
  ];
  const iphone = {
    id: 1,
    title: "Apple iPhone 13",
    price: "79,999",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
  };
  const samsung = {
    id: 2,
    title: "Samsung Galaxy Note 8",
    price: "69,999",
    image:
      "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas2/Black/Gallery-01-C2-Lockup-MysticBlack-1600x1200.jpg?$product-details-jpg"
  };

  const nokia = {
    id: 3,
    title: "Nokia 1100",
    price: "2,999",
    image: "https://m.media-amazon.com/images/I/41wGEmM0S4L.jpg"
  };

  return (
    <div className="App">
      {/* Welcome to React Class 2 */}
      {/* <ProductCard
        title={iphone.title}
        image={iphone.image}
        price={iphone.price}
      />
      <ProductCard
        title={samsung.title}
        image={samsung.image}
        price={samsung.price}
      /> */}
      {/* {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          product={product}
        />
      ))} */}
      <button onClick={toggleVisibility}>
        {" "}
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      <h3>Pizza</h3>
      {showCounter && <Counter />}
      <h3>Coke</h3>
      {showCounter && <Counter />}
    </div>
  );
}
