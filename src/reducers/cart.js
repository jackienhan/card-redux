import * as types from "./../constants/ActionType";
var data = JSON.parse(localStorage.getItem("CART"));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findIndex(state, product);
      console.log(action);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        });
      }

      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
      case types.REMOVE_PRODUCT_IN_CART:
        index = findIndex(state, product);
        if (index !== -1) {
          state.splice(index, 1);
        }
        localStorage.setItem('CART', JSON.stringify(state));
        return [...state];
        case types.DESCREAS_QUANTITY:
          index = findIndex(state, product);
          quantity = state[index].quantity;
          if (index !== -1 && quantity > 0) {
            state[index].quantity = quantity - 1;
          }
          localStorage.setItem('CART', JSON.stringify(state));
          return [...state];
          case types.INCREAS_QUANTITY:
          index = findIndex(state, product);
          quantity = state[index].quantity;
          if (index !== -1) {
            state[index].quantity = quantity + 1;
          }
          localStorage.setItem('CART', JSON.stringify(state));
          return [...state];
    default:
      return [...state];
  }
};
var findIndex = (cart, product) => {
  var index = -1;
 if (cart.length > 0) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === product.id) {
      index = i;
      break;
    }
  }
 }
  return index;
};
export default cart;
