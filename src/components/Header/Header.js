import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {


  return (
    <header className="header">
      <NavLink to="/main" activeClassName="header__link_active" className="header__link">Телефоны</NavLink>
      <NavLink to="/form" activeClassName="header__link_active" className="header__link">Добавить телефон</NavLink>
    </header>
  );
}

export default Header;
