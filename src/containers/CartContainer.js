import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import * as message from "./../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import { actRemoveProductInCart, actChangeMessage, actDescreasQuantity, actIncreasQuantity } from "../actions";
class CartContainer extends React.Component {
  render() {
    var { cart } = this.props;
    return (
      <div>
        <Cart>
          {this.showCartItem(cart)}
          {this.showTotalAmount(cart)}
        </Cart>
      </div>
    );
  }

  showCartItem = (cart) => {
  var result = <tr><td>{message.MSG_CART_EMPTY}</td></tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem 
        key={index} 
        item={item} 
        index={index}
        onDelete = {this.props.onDelete}
        onChangeMessage = {this.props.onChangeMessage}
        onDecreaseQuantity = {this.props.onDecreaseQuantity}
        onIncreaseQuantity = {this.props.onIncreaseQuantity}
         />;
      });
    }
    return result;
  };

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapstateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete : (product) => {
      dispatch(actRemoveProductInCart(product))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },

    onDecreaseQuantity: (product) => {
      dispatch(actDescreasQuantity(product));
    },

    onIncreaseQuantity: (product) => {
      dispatch(actIncreasQuantity(product));
    }
  }
}
export default connect(mapstateToProps, mapDispatchToProps)(CartContainer);
