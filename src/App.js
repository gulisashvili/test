import React, { Component } from 'react';
import './App.css';

import Test from './Test';


import { connect } from 'react-redux'

class App extends Component {
  componentDidMount () {
    axios.get('/users')
      .then(user =>
        this.props.init(user)
      )
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        lol
        <h1> From Redux { this.props.data.name } </h1>


        <button onClick={()=> this.props.setName("vaxo")}> click </button>


        <br />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />

      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName (name) => {
      dispatch({
        type: 'CHANGE_NAME',
        payload: name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
