export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // If item is in the cart array, return the array with an increase of 1 to the items quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    )
  }

  // If item is not in cart, add the cart item to the existing array with a base quantity of 1
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity > 1) {
    return cartItems.map(cartItem =>
      cartItem.id === existingCartItem.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  }

  return cartItems;
};