import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <span>TODO: APP - STORE PROP EXAMPLE : {this.props.language}</span>
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, _) => {
  return {
    language: state.app.language
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
