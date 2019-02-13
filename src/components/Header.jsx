import React from 'react';
import { Link } from 'react-router-dom';
import newpicture from '../assets/images/ticket.jpeg'

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <img src={newpicture}/>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
