import axios from 'axios';

export const filterProducts = (filter) => {
    let filterName = {};
    switch (filter) {
        case 'name_assending':
            filterName.field = ['type', 'name'];
            filterName.order = ['asc']
            break;
        case 'name_descending':
            filterName.field = ['type', 'name'];
            filterName.order = ['asc', 'desc']
            break;
        case 'low':
            filterName.field = ['type', 'price'];
            filterName.order = ['asc']
            break;
        case 'high':
            filterName.field = ['type', 'price'];
            filterName.order = ['asc', 'desc']
            break;
    }
    return {
        type: 'SORT',
        payload: filterName
    }
};

export function getProducts() {
    return (dispatch) => {
        return axios.get("http://localhost:3000/products").then((resp) => {
            dispatch(displayProducts(resp.data))
        })
        .catch(function(err){
           dispatch(handleError(err.message))
        })
    }
}

export function getProductById(state, props) {
    return state.eShopReducer.products.find(item => item.id == props.id)
}

export function displayProducts(products) {
    return {
        type: "GET_PRODUCTS",
        products: products
    }
}

export function handleError(err){
    return{
        type:"ERROR",
        error: err
    }
}