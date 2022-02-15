import React from 'react';
import BubbleAlert from '../BubleAlert/BubbleAlert';

import { MdOutlineShoppingCart } from 'react-icons/md';

import './IconCart.css';

const IconCart = ({ cart }) => {
  return (
    <i className="rounded-circle i-shipping-cart">
      <BubbleAlert cart={cart} />
      <MdOutlineShoppingCart />
    </i>
  );
};

export default IconCart;
