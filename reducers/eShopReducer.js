import _ from 'lodash';

const eShopReducer = (state = {
    products: [],
    cart: [],
    error: ""
}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            state = {
                ...state,
                products: action.products
            }
            break;
        case 'ADD_CART':
            state = {
                ...state,
                cart: [...state.cart, action.payload]
            }
            break;
        case 'REMOVE_CART':
            state = {
                ...state,
                cart: state.cart.filter(id => id !== action.payload)
            }
            break;
        case 'SORT':
            state = {
                ...state,
                products: _.orderBy(state.products, action.payload.field, action.payload.order)
            }
            break;
        case 'ERROR':
            state = {
                ...state,
                error: action.error ? action.error : "Error occured while processing your request."
            }
            break;
    }
    return state;
}

export default eShopReducer;