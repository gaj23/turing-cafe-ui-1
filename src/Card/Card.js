import React from 'react';

import './Card.css';

const Card = ({ id, name, date, time, number }) => {
  return (
    <article className='card {id}'>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Number of Guests: {number}</h3>
      <button className='cancel-button'>Cancel</button>
    </article>
  )
}

export default Card;
