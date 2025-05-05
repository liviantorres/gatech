import React from 'react';
import './Navbar.css';
import logo1 from '../../assets/logo-navbar.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>

        <Link to="/">
          <img src={logo1} alt="Logo1" className="Navbar-logo" /> 
        </Link>

        <ul className='nav-links'>
        <li><Link to="/">Início</Link></li>
<li><Link to="/acoes">Ações</Link></li>
<li><Link to="/sobre">Sobre</Link></li>
<li><Link to="/quem-somos">Quem Somos</Link></li>
<li><Link to="/contatos">Contatos</Link></li>
<li><Link to="/podcast" className='bot'>PodCast</Link></li>


        </ul>

      </div>
    </div>
  );
};

export default Navbar;
