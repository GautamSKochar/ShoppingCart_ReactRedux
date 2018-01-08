import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
var cartStyle = {
    'whiteSpace': 'nowrap',
    'textAlign': 'center',
    'lineHeight': '18px',
    'padding': '0 5px',
    'height': '18px',
    'background': '#007bff',
    'position': 'static',
    'borderRadius': '5px'
}

class Header extends React.Component {
    render() {
        return (

            <div className="page-header">

                <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/">eShop</NavLink></li>
                        </ul>
                        <h1 style={{ align: "center", color: 'white' }}>Shopping cart</h1>
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/cart">Cart&nbsp;
                            {this.props.cartCount ? <span style={cartStyle}>
                                    {this.props.cartCount}
                                </span> : ''}

                            </NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div >



        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartCount: state.eShopReducer.cart ? state.eShopReducer.cart.length : 0
    }
}
export default connect(mapStateToProps)(Header)