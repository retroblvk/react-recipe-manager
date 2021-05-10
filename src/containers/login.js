import { connect } from 'react-redux';
import { Component } from 'react';
import Layout from './../components/layout';

import { setEmailField, setPasswordField, loginUser } from './../actions';

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
    loginUser: (obj) => dispatch(loginUser(obj)),
  };
};

class Login extends Component {
  componentDidMount() {
    document.title = 'Yum | Login';
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.props.userFields);
  };
  render() {
    return (
      <Layout>
        <form action='' className='login-form' onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor=''>Email</label>
            <input type='text' onChange={this.props.onEmailChange} />
          </div>
          <div>
            <label htmlFor=''>Password</label>
            <input type='text' onChange={this.props.onPasswordChange} />
          </div>
          <button class='btn'>Login</button>
        </form>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
