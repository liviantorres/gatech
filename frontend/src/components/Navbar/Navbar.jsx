import React from 'react';
import './Navbar.css';
import logo1 from '../../assets/logo-navbar.svg';

const Navbar = () => {
  return (
      <div className='navbar'>
        <div className='navbar-container'>
        <img src={logo1} alt="Logo1 " className="Navbar-logo" />
               
               <ul className='nav-links'>
                
                 <li><a href="#">Início</a></li>
                 <li><a href="#">Ações</a></li>
                 <li><a href="#">Sobre</a></li>
                 <li><a href="#">Quem Somos</a></li>
                 <li><a href="#">Contatos</a></li>
                 <li><a href="#" className='bot'>PodCast</a></li>
         </ul>
  
        </div>
      </div>
  );
};

export default Navbar;
