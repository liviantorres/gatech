import React from 'react';
import './Acoes.css';
import '../../styles/global.css';


import LogoRosa from '../../assets/logo-gatech-rosa.png';
import IconeGraduacao from '../../assets/icone-graduacao.png';




const Acoes = () => {

  return (
      <div>
        <div className="section-container-titulo">
          <img src={LogoRosa} alt="Logo Gatech Rosa" className="imagem-logo-rosa" />
          <h2 className="titulo">Ações</h2>
        </div>
    
        <div className="section-container-acoes">

        <img alt="Ícone" className="timeline-icon-acoes" src={IconeGraduacao} />

        <h3 className='titulo-acoes'> Extensão</h3>

        </div>




      </div>
    );
};

export default Acoes;
