import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


class SignButton extends Component {
  clickHandler = event => {
    event.preventDefault();
    this.props.signOut();
  };

  render() {
    const { isLoggedIn, user } = this.props;

    const button =
      isLoggedIn && user ? (
        <a href="/" className="button b-signout" onClick={this.clickHandler}>
          Выход
        </a>
      ) : (
          <Link className="button b-signin" to="/login">
            <Button className="btn_class_sign" variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
        );
    return button;
  }
}

SignButton.proptypes = {
  user: PropTypes.shape().isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};