import React from 'react';

import './Card.css';

const Card = ({ id, name, date, time, number, cancelReservation}) => {
  return (
    <article className='card {id}'>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Number of Guests: {number}</h3>
      <button className='cancel-button' onClick={() => cancelReservation(id)}>Cancel</button>
    </article>
  )
}

export default Card;
