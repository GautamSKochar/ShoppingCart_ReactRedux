import reducer from "../../reducers/eShopReducer";
import { filterProducts } from "../../actions/eShopActions";
import _orderBy from "lodash/orderBy";

const products = [
    {
        "id": 3,
        "name": "Dining Table",
        "price": 34999,
        "currency": "Rs.",
        "imagePath": "images/table.jpg"
    },
    {
        "id": 1,
        "name": "BagPack",
        "price": 499,
        "currency": "Rs.",
        "imagePath": "images/backpack.jpg"
    }
];

const cart = [3];

describe('eShopReducer', () => {
    it('should return a initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            products: [],
            cart: [],
            error:""
        })
    }),
        it('should handle GET_PRODUCTS', () => {
            expect(
                reducer({
                    products: [],
                    cart: [],
                    error: ""
                }, {
                        type: 'GET_PRODUCTS',
                        products: products
                    })
            ).toEqual(
                {
                    products,
                    cart: [],
                    error:""
                })
        }),
        it('should handle ADD_CART', () => {
            const payload = 3;
            expect(
                reducer({
                    products: [],
                    cart: []
                }, {
                        type: 'ADD_CART',
                        payload: payload
                    })
            ).toEqual(
                {
                    products: [],
                    cart: cart
                })
        }),
        it('should handle Remove_CART', () => {
            const payload = 3;
            expect(
                reducer({
                    products: [],
                    cart: cart // [3]
                }, {
                        type: 'REMOVE_CART',
                        payload: payload
                    })
            ).toEqual(
                {
                    products: [],
                    cart: []
                })
        }),
        it('should handle SORT', () => {
            const payload = {
                field: ['type', 'name'],
                order: ['asc']
            };
            expect(
                reducer({
                    products: products
                }, {
                        type: 'SORT',
                        payload: payload
                    })
            ).toEqual(
                {
                    products: _orderBy(products,['type', 'name'],['asc'])
                })
        })


})