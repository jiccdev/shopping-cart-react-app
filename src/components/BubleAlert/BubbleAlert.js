import { useState } from 'react';

import './BubleAlert.css';

const BubbleAlert = ({ cart }) => {
  const getCountItems = (itemCount) => {
    if (!itemCount) {
      return '';
    }
    return itemCount > 9 ? '+9' : itemCount;
  };

  return (
    <div className="bubleAlert">
      <span>{getCountItems(cart.length)}</span>
    </div>
  );
};

export default BubbleAlert;
