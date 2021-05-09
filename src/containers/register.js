import { connect } from 'react-redux';
import { Component } from 'react';
import Layout from './../components/layout';

import {
  setEmailField,
  setPasswordField,
  setConfirmPasswordField,
  postUser,
} from './../actions';

const mapStateToProps = (state) => {
  return {
    userFields: state.userFields,
    requestUser: state.requestUser,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (e) => dispatch(setEmailField(e.target.value)),
    onPasswordChange: (e) => dispatch(setPasswordField(e.target.value)),
    onConfirmPasswordChange: (e) =>
      dispatch(setConfirmPasswordField(e.target.value)),
    postUser: (obj) => dispatch(postUser(obj)),
  };
};

class Register extends Component {
  componentDidMount() {
    document.title = 'Yum | Register';
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleClick = (e) => {
    this.props.postUser(this.props.userFields);
  };
  render() {
    return (
      <Layout>
        <form action='' className='login-form' onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <div>
            <label htmlFor=''>Email</label>
            {this.props.requestUser.err.emailField === true ? (
              <p className='error'>{`Email cannot be blank`}</p>
            ) : (
              ''
            )}
            <input type='email' onChange={this.props.onEmailChange} />
          </div>
          <div>
            <label htmlFor=''>Password</label>
            {this.props.requestUser.err.passwordField === true ? (
              <p className='error'>{`Password cannot be blank`}</p>
            ) : (
              ''
            )}
            <input type='password' onChange={this.props.onPasswordChange} />
          </div>
          <div>
            <label htmlFor=''>Confirm Password</label>
            {this.props.requestUser.err.confirmPasswordField === true ? (
              <p className='error'>{`Confirm password cannot be blank`}</p>
            ) : (
              ''
            )}
            <input
              type='password'
              onChange={this.props.onConfirmPasswordChange}
            />
          </div>
          <button className='btn' onClick={this.handleClick}>
            Register
          </button>
        </form>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
