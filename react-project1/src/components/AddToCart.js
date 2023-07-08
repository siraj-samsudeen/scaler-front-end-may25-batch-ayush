import { useSelector, useDispatch } from "react-redux";
import { useCartContext } from "../context/cart";
import { addToCartRedux, removeFromCartRedux } from "../store/cart";

const AddToCart = ({ product }) => {
  // const { cart, addToCart, subtractFromCart } = useCartContext();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("cart value in add to cart", cart);

  const handleAdd = (event) => {
    // addToCart(product);
    dispatch(addToCartRedux(product));
    event.stopPropagation();
  };

  const handleSubtract = (event) => {
    // subtractFromCart(product);
    dispatch(removeFromCartRedux(product));
    event.stopPropagation();
  };
  const productInCart = cart[product.id];
  if (!productInCart)
    return (
      <div onClick={handleAdd} className="add-to-cart">
        Add To Cart
      </div>
    );
  else {
    return (
      <div className="add-to-cart-container">
        <div onClick={handleSubtract} className="add">
          -
        </div>
        <div className="quantity">{productInCart.quantity}</div>
        <div onClick={handleAdd} className="add">
          +
        </div>
      </div>
    );
  }
};

export default AddToCart;
