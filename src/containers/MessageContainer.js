import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Message from "../components/Message";

class MessageContainer extends React.Component {
  render() {
    var { message } = this.props;
    return (
      <div>
        <Message message={message}>
        </Message>
      </div>
    );
  }

}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
};

const mapstateToProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
   
  }
}

export default connect(mapstateToProps, mapDispatchToProps)(MessageContainer);
