import React from 'react';
import { connect } from 'react-redux';

import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

import {
  ArrowContainer,
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer, RemoveButtonContainer,
  SpanContainer, ValueContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <SpanContainer>{name}</SpanContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <SpanContainer>{price}</SpanContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);