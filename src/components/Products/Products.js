import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../Product/Product';
import './Products.css';

const Products = ({ products, cart, setCart }) => {
  return (
    <Container>
      <Row className="row">
        {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} className="col">
            <Product product={product} cart={cart} setCart={setCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
