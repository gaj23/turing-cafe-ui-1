import React from 'react';

import Card from '../Card/Card';

import './Reservations.css';

const Reservations = ({ reservations, cancelReservation }) => {

  const reservationCards =  reservations.map(reservation => {
    return (<Card
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        cancelReservation={cancelReservation}
      />
    )
  })

  return (
    <section className='resy-container'>
      {reservationCards}
    </section>
  )
}

export default Reservations;
