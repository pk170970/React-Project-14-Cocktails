import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
      <h1>Oops! It's a dead End.</h1>
      <NavLink className='btn btn-primary' to ="/">Back Home</NavLink>
      </div>
    </section>
  )
}

export default Error