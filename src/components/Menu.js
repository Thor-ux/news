import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <NavLink exact to="/" className="menu__item" activeClassName="menu__item-active">
        
      </NavLink>
      <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active">
        -
      </NavLink>
      <NavLink to="/timeattack" className="menu__item" activeClassName="menu__item-active">
        Time Attack
      </NavLink>
      <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active">
        Forza Karting
      </NavLink>
    </nav>
  );
}