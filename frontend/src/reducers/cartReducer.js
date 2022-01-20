export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const item = action.type;
      const existItem = state.cartItems.find((n) => n.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((n) =>
            n.product === existItem.product ? item : n
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};
