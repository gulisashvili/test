import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

class Test extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.data.name}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, null)(Test)
