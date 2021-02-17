import React, { Component } from 'react';

import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';
import Error from '../Error/Error'

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
    fetch('http://localhost:3001/api/v1/reserations')
      .then(response => response.json())
      .then(response => this.setState({reservations: response, loading: false}))
      .catch(error => this.setState({error: true, loading: false}))
  }

  addReservation = resy => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method:'POST',
      headers: {
  	     'Content-Type': 'application/json'
       },
      body: JSON.stringify(resy)
    })

    this.setState({ reservations: [...this.state.reservations, resy]})
  }

  cancelReservation = id => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method:'DELETE'
    })
    const filteredReservations = this.state.reservations.filter(resy =>  resy.id !== id)

    this.setState({ reservations: filteredReservations})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            addReservation={this.addReservation}/>
        </div>
          {this.state.error && <Error />}
          <Reservations
            reservations={this.state.reservations}
            cancelReservation={this.cancelReservation}
          />
      </div>
    )
  }
}

export default App;
