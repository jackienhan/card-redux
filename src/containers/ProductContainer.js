import React from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from "../components/Product";
import { actAddToCart, actChangeMessage } from "../actions";
class ProductContainer extends React.Component {
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
          result = products.map((product, index) => {
            return <Product 
            key={index} 
            product={product}
            onAddToCart = {this.props.onAddToCart}
            onChangeMessage = {this.props.onChangeMessage}
            />
          });
        }
        return result;
      }
  render() {
    var { products } = this.props;
    return (
      <Products>
          {this.showProducts(products)}
      </Products>
    );
  }
}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
       PropTypes.shape({
        id : PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
       })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired
}
const mapStatetoProps = (state) => {
  return {
    products: state.products
  };
}
const mapDispatchToProps = (dispatch, props) => {

  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1))
    },

    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    }
  };
}
export default connect(mapStatetoProps, mapDispatchToProps)(ProductContainer);
