import { GET_PRODUCTS, PRODUCTS_ERROR, SEARCH_PRODUCTS } from "./types";

const initialState = {
  products: [],
  product: {},
  loading: true,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case SEARCH_PRODUCTS:
      let value = action.payload.value;
      let filteredValues = state.products.filter((product) => {
        //return any product whose name or designer contains the input box string
        return product.title.toLowerCase().includes(value);
      });
      return {
        ...state,
        products: filteredValues,
      };

    default:
      return state;
  }
}
