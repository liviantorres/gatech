import React from 'react';
import './Acoes.css';
import '../../styles/global.css';

import LogoRosa from '../../assets/logo-gatech-rosa.png';
import IconeGraduacao from '../../assets/icone-graduacao.png'; 

import ImagemAcao1 from '../../assets/imagemAcao.png';
import ImagemAcao2 from '../../assets/imagemAcao.png';
import ImagemAcao3 from  '../../assets/ImagemAcao3.png';
import ImagemAcao4 from '../../assets/ImagemAcao4.png';
import ImagemAcao5 from '../../assets/ImagemAcao5.png';

import Postagem from '../../components/Postagem/Postagem';


const ACOES = [
  {
    imagem: ImagemAcao1,
    titulo: "Oficina de Teste de Software",
    data: "Colocar data",
    descricao: "Ministrada pelas alunas integrantes do projeto Ariadna Miranda e Agatha Martins, a oficina teve como objetivo proporcionar aos participantes conhecimentos práticos e teóricos sobre testes de software, uma área fundamental na qualidade de produtos de tecnologia."
  },
  {
    imagem: ImagemAcao2,
   
    titulo: "Yoga",
    data: "Colocar data",
    descricao: "Como parte de nossas atividades de bem-estar, tivemos o privilégio de desfrutar de sessões revigorantes de Yoga com Daiana Lopes (Prya), todas as primeiras quartas-feiras do mês. As sessões proporcionaram momentos de paz e relaxamento, permitindo-nos conectar profundamente com nosso corpo e mente."
  },
  {
    imagem: ImagemAcao3,
   
    titulo: "Visita às escolas Regina Pácis e Lourenço Filho",
    data: "Colocar data",
    descricao: "Durante nossa visita às escolas Regina Pácis e Lourenço Filho, tivemos o privilégio de interagir com os alunos dos 2° e 3° anos. Realizamos um rápido questionário para conhecer suas percepções sobre tecnologia e sua receptividade foi incrível."
  },
  {
    imagem: ImagemAcao4,
 
    titulo: "Participação na EEEP Maria Eudes Bezerra Veras",
    data: "Colocar data",
    descricao: "Em comemoração ao Dia do Profissional de Tecnologia da Informação (TI), nossa bolsista voluntária Claudia Barbosa teve a honra de representar o GaTech no evento da EEEP Maria Eudes Bezerra Veras. Foi uma oportunidade enriquecedora para compartilhar a missão e as atividades do nosso projeto."
  },
  {
    imagem: ImagemAcao5,
   
    titulo: "Evento “Ser mãe na UFC”",
    data: "Colocar data",
    descricao: "Este evento teve como propósito essencial discutir os desafios enfrentados por mães que são estudantes e servidores da universidade. Foi uma oportunidade valiosa para abordar questões relevantes e sensíveis, visando discutir e promover a inclusão de mães em um ambiente acadêmico muitas vezes desafiador.Organização: Sou de Casa, Minervas, GaTech e DAE"
  },
];





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

        <div>
        {ACOES.map((acao, index) => (
        <Postagem
        key={index}
        imagem={acao.imagem}
        icone={acao.icone}
        titulo={acao.titulo}
        data={acao.data}
        descricao={acao.descricao}
       />
        ))}

        </div>


      </div>
    );
};

export default Acoes;
