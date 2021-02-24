export const getCart = () => {
  let cart = {
    user: 'user1',
    products: []
  }
  if (typeof window !== "undefined") {
    // localStorage.removeItem('mockCart')
    const storedCart = localStorage.getItem('mockCart')
    cart = JSON.parse(storedCart) || cart
  }
  return cart
}

export const setCart = (item) => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem('mockCart')
    if (!cart) {
      const newCart = {
        user: 'user1',
        products: [
          {...item}
        ]
      }
      localStorage.setItem('mockCart', JSON.stringify(newCart))
    } else {
      // check for existing product
      const parsedCart = JSON.parse(cart)
      // TODO: different colors or size probably should have different sku to account for true amount products in cart
      const matchedPrdIndex = parsedCart.products.findIndex((existingItem) => item.sku === existingItem.sku)
      if (matchedPrdIndex < -1) {
        parsedCart.products.push({...item})
      } else {
        parsedCart.products[matchedPrdIndex].qty = item.qty + parsedCart.products[matchedPrdIndex].qty
      }
      localStorage.setItem('mockCart', JSON.stringify(parsedCart))
    }
  }
  return true
}