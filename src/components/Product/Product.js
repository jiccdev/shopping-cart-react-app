import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Product.css';

const Product = ({ product, cart, setCart }) => {
  const { productGame, generation, price, corporation, img } = product;

  // format to EE.UU current
  const formatCurrentValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const addItemsToCart = (product) => {
    if (cart.find((p) => p.productGame === product.productGame)) {
      const newCart = cart.map((p) =>
        p.productGame === product.productGame
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      return;
    }
    setCart([...cart, product]);
  };

  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={`${img}`}
        style={{ width: '370px' }}
        className="card-top"
      />
      <Card.Body className="card-body">
        <div className="card-text">
          <Card.Title className="card-title title-cart">
            {productGame}
          </Card.Title>
        </div>

        <div className="card-text">
          <small>Generation:</small>
          <Card.Text className="card-text">
            <span>{generation}</span>
          </Card.Text>
        </div>

        <div className="card-text">
          <small>Price:</small>
          <Card.Text className="card-text">
            <span>{formatCurrentValue.format(price)}</span>
          </Card.Text>
        </div>
        <div className="card-text">
          <small>Corporation:</small>
          <Card.Text className="card-text">
            <span>{corporation}</span>
          </Card.Text>
        </div>

        <Button
          onClick={() => addItemsToCart(product)}
          variant="success"
          className="btn"
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
