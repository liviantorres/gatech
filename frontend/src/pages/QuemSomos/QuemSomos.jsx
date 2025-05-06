import React from 'react';
import LogoRosa from '../../assets/logo-gatech-rosa.png';

const QuemSomos = () => {
  return (
    <div>
      <div className="section-container-titulo">
        <img src={LogoRosa} alt="Logo Gatech Rosa" className="imagem-logo-rosa" />
        <h2 className="titulo">Quem Somos</h2>
      </div>

      <div className="section-container">
        <div className="text-block">
          <p>
            Nossa equipe maravilhosa é a força por trás de cada um dos nossos projetos,
          
            garantindo que as coisas aconteçam com excelência e sucesso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
