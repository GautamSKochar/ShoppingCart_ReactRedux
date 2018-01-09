import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts, filterProducts } from '../actions/eShopActions';
import { addToCart, removeFromCart } from '../actions/cartActions';
import ProductItem from './ProductItem';
import SortProducts from './SortProducts';
import propTypes from 'prop-types';

class EShop extends React.Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.checkInCart = this.checkInCart.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.eachProduct = this.eachProduct.bind(this);
    }
    checkInCart(id) {
        return this.props.cart.findIndex(x => x == id) == -1;
    }
    handleChange(filter) {
        return this.props.filterProducts(filter);
    }
    handleClick(id) {
        let inCart = this.checkInCart(id);
        if (inCart) {
            this.props.addToCart(id);
        }
        else {
            this.props.removeFromCart(id)
        }
        console.log('need to  change here');
    }
    componentWillMount() {
        this.props.getProducts();
    }
    eachProduct(product, index) {
        return (
            <ProductItem key={index} checkInCart={this.checkInCart} product={product} index={product.id}
                handleClick={this.handleClick} />
        );
    }
    render() {
        if (this.props.products && this.props.products.length) {
            return (
                <div>
                    <div className="row" style={{ margin: '20px' }}>
                        <div className="col-md-9"><h3>Products</h3></div>
                        <div className="col-md-3"><h3><SortProducts handleChange={this.handleChange} /></h3></div>
                    </div>

                    <div className="container">
                        {this.props.products.map(this.eachProduct)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="alert alert-info">{this.props.error}</div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.eShopReducer.products,
        cart: state.eShopReducer.cart,
        error: state.eShopReducer.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(getProducts())
        },
        addToCart: (id) => {
            dispatch(addToCart(id))
        },
        removeFromCart: (id) => {
            dispatch(removeFromCart(id))
        },
        filterProducts: (filter) => {
            dispatch(filterProducts(filter))
        }
    }
}

EShop.propTypes = {
    products: propTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(EShop)