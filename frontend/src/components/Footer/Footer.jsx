// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../../assets/logo-gatech-branco.png';
import emailIcon from '../../assets/email.png';
import instagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <img src={logo} alt="Logo Gatech" className="footer-logo" />
            <div>
                <h3>Sobre</h3>
                <span className="texto">Projeto de Extensão GaTech<br />
                Realização: Universidade Federal do Ceará,<br />
                campus Crateús</span>
            </div>

            <div className="footer-section">
                <h3>Contato</h3>
                <div className="contato-email">
                    <img src={emailIcon} alt="Email" className="icon-email" />
                    <span className="texto">gatech@crateus.ufc.br</span>
                </div>
            </div>

            <div className="footer-section redes-sociais">
                <h3>Redes Sociais</h3>
                <div className="social-icons">
                    <a href="https://www.instagram.com/_gatech/" target="_blank" rel="noreferrer">
                        <img src={instagramIcon} alt="Instagram" className="icon-sociais" />
                    </a>
                    <a href="https://www.linkedin.com/in/garotas-tech-dos-sert%C3%B5es-de-crate%C3%BAs-b175801b3/" target="_blank" rel="noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="icon-sociais" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
