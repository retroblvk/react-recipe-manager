import { connect } from 'react-redux';
import { Component } from 'react';

const mapStateToProps = (state) => {
  return {};
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {};
};
class Index extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Match</h1>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(Index);
