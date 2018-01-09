import React from 'react';
import propTypes from 'prop-types';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleClick(this.props.index);
    }

    render() {
        let chkincart = typeof (this.props.checkInCart) == 'function' ? 
            this.props.checkInCart(this.props.index) : this.props.checkInCart;
        return (
            <div className="card" style={{ display: 'inline-block', margin: '25px' }}>
                <img className="card-img-top" alt="Product" src={this.props.product.imagePath} alt="Product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="card-text" style={{ display: 'inline', 'lineHeight': '34px' }}>
                        {this.props.product.name}
                        <span style={{ backgroundColor: '#dddddd' }}>
                            {this.props.product.currency} {this.props.product.price}
                        </span>
                    </div>
                    <div className="card-block" style={{ float: 'right', margin: '0px 5px 7px 5px' }}>
                        <button style={{ cursor: 'pointer' }} className={chkincart ? 'btn btn-primary' : 'btn btn-danger'} onClick={this.handleClick}>
                            {chkincart ? 'Add to Cart' : 'Remove'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ProductItem.propTypes = {
    product: propTypes.isRequired,
    product: propTypes.object,
    index: propTypes.number
}

export default ProductItem;