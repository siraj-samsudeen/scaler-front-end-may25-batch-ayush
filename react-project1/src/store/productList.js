const initialState = {
  loading: false,
  data: [],
  loadError: null
};

const PRODUCT_LIST_INIT = "PRODUCT_LIST_INIT";
const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
const PRODUCT_LIST_ERROR = "PRODUCT_LIST_ERROR";

const productListInit = () => ({
  type: PRODUCT_LIST_INIT
});
const productListError = (payload) => ({
  type: PRODUCT_LIST_ERROR,
  payload
});
const productListSuccess = (payload) => ({
  type: PRODUCT_LIST_SUCCESS,
  payload
});

export const loadProducts = (category) => {
  console.log("loading products");
  return async (dispatch, state) => {
    console.log("state =", state, "disspatch=", dispatch);
    const { loading } = state;
    console.log("state ", state);
    if (loading) return;
    try {
      dispatch(productListInit());
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      console.log("data =", data);
      dispatch(productListSuccess(data));
    } catch (err) {
      dispatch(productListError(err));
    }
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_INIT:
      return {
        ...state,
        loading: true,
        data: [],
        loadError: null
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loadError: null
      };
    case PRODUCT_LIST_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        loadError: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
