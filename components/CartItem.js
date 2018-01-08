import React from 'react';
import propTypes from 'prop-types';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleClick(this.props.index);
    }

    render() {
        return (
            <div className="card" style={{ display: 'inline-block', margin: '25px' }}>
                <img className="card-img-top" src={this.props.product.imagePath} alt="Product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="card-text" style={{ display: 'inline', 'lineHeight': '34px' }}>
                        {this.props.product.name}
                    </div>
                    <div className="card-block" style={{ float: 'right', margin: '0px 5px 7px 5px' }}>
                        <button style={{ cursor: 'pointer' }} className="btn btn-danger" onClick={this.handleClick}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

CartItem.propTypes = {
    product: propTypes.isRequired,
    product: propTypes.object,
    index: propTypes.number
}

export default CartItem;