import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { getCartItems, removeFromCart } from "../actions/cartActions";
import CartItem from "../components/CartItem";

class Cart extends React.Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.eachCartItem = this.eachCartItem.bind(this);
    }
    handleClick(id) {
        this.props.removeFromCart(id);
    }
    eachCartItem(cartItem, index) {
        return (
            <CartItem key={index} product={cartItem} index={cartItem.id}
                handleClick={this.handleClick} />
        );
    }

    render() {
        if (this.props.cartItems.length) {
            return (
                <div style={{margin: '20px'}}>
                    <h3>Cart Items</h3>
                    <div className="container">
                        {this.props.cartItems.map(this.eachCartItem)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="alert alert-info">Your shopping cart is empty.</div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.eShopReducer.cart,
        cartItems: getCartItems(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => {
            dispatch(removeFromCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);