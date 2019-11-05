import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/work-experience">Expereience</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Navbar;