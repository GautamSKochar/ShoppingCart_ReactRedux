import { getProduct } from './eShopActions';

export const addToCart = (id) => {
    return {
        type: "ADD_CART",
        payload: id
    }
};

export const removeFromCart = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id
    }
};

export const getCartItems = (state) => {
    return state.eShopReducer.cart.map(id => getProduct(state, { id }))
}