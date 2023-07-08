import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../hooks/useApi";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { loadProducts } from "../store/productList";
import { setSelectedCategory } from "../store/header";

/**
 * 
 * fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
 */
const ProductList = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProducts(json);
  //       setLoading(false);
  //       console.log(json);
  //     });
  // }, [selectedCategory]);
  const { category } = useParams();
  const dispatch = useDispatch();
  // const {selectedCategory} = useSelector(state=>state.header)
  // console.log("value of header from redux",value)
  const categoryVal = category || "electronics";
  // const { data, loading, loadError } = useApi(
  //   `https://fakestoreapi.com/products/category/${selectedCategory}`
  // );
  useEffect(() => {
    dispatch(loadProducts(categoryVal));
    dispatch(setSelectedCategory(categoryVal));
  }, [categoryVal, dispatch]);

  const { loading, data, loadError } = useSelector(
    (state) => state.productList
  );

  console.log("data in comp", data);

  if (loading) return <div className="loading">Fetching products... </div>;
  else if (loadError) return <div>Oops..Please try again</div>;
  else
    return (
      <div className="products">
        {data.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
};

export default ProductList;
