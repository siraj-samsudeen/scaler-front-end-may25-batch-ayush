import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cart";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  // setLoading(true)
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);
  const { data, loading, loadError } = useApi(
    "https://fakestoreapi.com/products/categories"
  );

  useEffect(() => {
    if (data.length > 0) {
      setSelectedCategory(data[0]);
    }
  }, [data, setSelectedCategory]);

  const { cart } = useCartContext();
  console.log("cart value in header ", cart);

  const totalItems = () => {
    let total = 0;
    for (let obj in cart) {
      total += cart[obj].quantity;
    }
    return total;
  };

  if (loading) return <div>Fetching Categories</div>;
  else if (loadError) return <div>Oops...Please try again </div>;
  else
    return (
      <div className="header-items">
        {data.map((category) => (
          <Link
            to={`categories/${category}`}
            key={category}
            className={
              "header-item " +
              (category === selectedCategory ? "header-item-selected" : "")
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Link>
        ))}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-length">{totalItems()}</span>
      </div>
    );
};

export default Header;
