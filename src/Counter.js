import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component {

    increment(count){
        this.props.handleIncrement(count);
    }

    decrement(count){
        this.props.handleDecrement(count);
    }
  render() {
      const { count } = this.props.count;

    return (
      <div>        
        Counter : <span>{count}</span> <br /> <br />
        <button onClick={this.increment.bind(this, count)}>Increment</button> <br /> <br />
        <button onClick={this.decrement.bind(this, count)}>Decrement</button>
      </div>
    )
  }
}

Counter.propTypes = {
    handleIncrement: PropTypes.func.isRequired,	
    handleDecrement: PropTypes.func.isRequired,	
};

const mapStateToProps = (state) => ({
	count: state.count,	
});

const mapDispatchToProps = dispatch => {    
  return{
    handleIncrement: (count) => dispatch({type: 'INCREMENT', value: count}),
    handleDecrement: (count) => dispatch({type: 'DECREMENT', value: count})
  } 
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);