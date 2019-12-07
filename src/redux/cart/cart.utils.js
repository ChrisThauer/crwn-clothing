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