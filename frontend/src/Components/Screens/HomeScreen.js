import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../Product';
import Loader from '../Loader';
import Message from '../Message';
import { productList } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreens = () => {
  const dispatch = useDispatch();
  const productLists = useSelector((state) => state.productList);
  const { products, loading, error } = productLists;
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest product</h1>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )} */}
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreens;
