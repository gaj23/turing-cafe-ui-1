import React, { Component } from 'react';

import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      loading: true,
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(response => this.setState({reservations: response}))
      .catch(error => console.log(`We're having the following error: ${error}`))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
          <Reservations reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
