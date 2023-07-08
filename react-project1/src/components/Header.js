import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useApi from "../hooks/useApi";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cart";
import { setSelectedCategory } from "../store/header";

const Header = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  // setLoading(true)
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);
  // const { category } = useParams();
  const { category } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const { data, loading, loadError } = useApi(
    "https://fakestoreapi.com/products/categories"
  );

  const selectedCategory = category || data[0];
  useEffect(() => {
    if (data.length > 0) {
      dispatch(setSelectedCategory(selectedCategory));
    }
  }, [data, setSelectedCategory]);

  // const { cart } = useCartContext();
  const cart = useSelector((state) => state.cart);
  console.log("cart value from redux in header ", cart);

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
