// src/components/Postagem/Postagem.jsx
import React from 'react';
import './Postagem.css'; // importaremos os estilos que já existem

const Postagem = ({ imagem, icone, titulo, data, descricao }) => (
  <div className="postagem">
    <div className="imagem-container">
      <img src={imagem} alt={titulo} className="imagem-evento" />
      
    </div>
    <div className="card-postagem">
      <div className="conteudo-postagem">
        <h3>{titulo}</h3>
        <p className="data-postagem">📅 {data}</p>
        <div className="texto-e-botao">
          <p className="descricao-postagem">{descricao}</p>
         
        </div>
      </div>
      <div className="rodape-card"></div>
    </div>
  </div>
);

export default Postagem;
