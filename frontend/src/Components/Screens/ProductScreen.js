import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Image, ListGroup } from 'react-bootstrap';
import products from '../../products';

const ProductScreen = ({ match }) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
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
