import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;  
  const {removeItem, addItem, clearItemFromCart, } = useContext(CartContext);

  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={ imageUrl } alt='item1' />
      </div>
      <div className='name'>{ name }</div>
      <div className='quantity'>
        <div className='arrow' onClick={ () => removeItem(cartItem) }>&#10094;</div>
        <span className='value'>{ quantity }</span>
        <span className='arrow' onClick={ () => addItem(cartItem) }>&#10095;</span>
      </div>
      <div className='price'>${ price }</div>
      <div className='remove-button' onClick={ () => clearItemFromCart(cartItem) }
        >&#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
