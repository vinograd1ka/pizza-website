export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD-PIZZA-CART',
    payload: pizzaObj
})

export const clearCart = () => ({
    type: 'CLEAR-CART',
})

export const removeCartItem = (id) => ({
    type: 'REMOVE-CART-ITEM',
    payload: id
})