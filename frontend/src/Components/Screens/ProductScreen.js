import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Image, ListGroup } from 'react-bootstrap';
import { productDetails } from '../../actions/productAction';

const ProductScreen = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const productDtails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDtails;

  useEffect(() => {
    dispatch(productDetails(id));
  }, [id, dispatch]);

  return (
    <div>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup style={{ fontWeight: '450' }} variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            <ListGroup.Item>Rating: {product.rating}</ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
