import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Test extends Component {

  test(){
    alert("CHECK THE ACTIONS FIRING ON REDUX DEV TOOLS!!!");
    this.props.handleTest();
  }
  render() {
    return (
      <div>        
        <button onClick={this.test.bind(this)}>Test</button>
      </div>
    )
  }
}

Test.propTypes = {
	handleTest: PropTypes.func.isRequired,	
};

const mapStateToProps = (state) => ({
	test: state.test,	
});

const mapDispatchToProps = dispatch => {
  return{
    handleTest: () => dispatch({type: 'TEST_SAGA', test: "HELLO REDUX SAGA"})
  } 
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);