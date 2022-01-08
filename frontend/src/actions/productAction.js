import axios from 'axios';

export const productList = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' });
    const { data } = await axios.get('/api/products');
    dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'PRODUCT_LIST_FAIL', payload: err.message });
  }
};
