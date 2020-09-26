import React from "react";
import * as messages from '../constants/Message'
class CartItem extends React.Component {
  showTotal = (price, quantity) => {
    return price * quantity;
  }
  onDelete = (product) => {
    this.props.onDelete(product);
    this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  onDecreaseQuantity = (product) => {
    this.props.onDecreaseQuantity(product);
  }
  onIncreaseQuantity = (product) => {
    this.props.onIncreaseQuantity(product);
    this.props.onChangeMessage(messages.MSG_UPDATE_CART_SUCCESS);
  }
  render() {
    var { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
    <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
                                onClick={() => this.onDecreaseQuantity(item.product)}
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
                                onClick={() => this.onIncreaseQuantity(item.product)}
            >
              <a>+</a>
            </label>
          </div>
        </td>
    <td>{this.showTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="Remove item"
            onClick={ () => this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
