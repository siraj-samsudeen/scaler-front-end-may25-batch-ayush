import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import cartReducer from "./cart";
import productListReducer from "./productList";
import thunk from "redux-thunk";
import headerReducer from "./header";

const reducer = combineReducers({
  cart: cartReducer,
  productList: productListReducer,
  header: headerReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
