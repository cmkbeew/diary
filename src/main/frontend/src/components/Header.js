import React from 'react';
import './Header.css';

const Header = ({title, left, right}) => {
  return (
    <div>
      <header className="Header">
        <div className="header_left">{left}</div>
        <div className="header_center">{title}</div>
        <div className="header_right">{right}</div>
      </header>
    </div>
  );
};

export default Header;