import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  function clearStorage() {
    localStorage.clear();
  }
  return (
    <div className='rmdb-header'>
      <div className='rmdb-header-content'>
        <Link to='/' onClick={clearStorage}>
          <img
            className='rmdb-logo'
            src='./images/reactMovie_logo.png'
            alt='rmdb-logo'
          />
        </Link>

        <img
          className='rmdb-tmdb-logo'
          src='./images/tmdb_logo.png'
          alt='rmdb-tmdb-logo'
        />
      </div>
    </div>
  );
};

export default Header;
