import ImagemMenina from '../../assets/arte-menina-inicio.png';
import ImagemEvento1 from '../../assets/imagem-evento-1.jpeg';
import ImagemEvento2 from '../../assets/imagem-evento-2.jpeg';

import MissaoIcon from '../../assets/icone-missao.png';
import MetaIcon from '../../assets/icone-meta.png';
import ObjetivoIcon from '../../assets/icone-objetivo.png';
import IconeGraduacao from '../../assets/icone-graduacao.png';
import IconeCoracao from '../../assets/icone-coracao.png';

import '../../styles/global.css';
import './Inicio.css';
import { CardInfo } from '../../components/CardInfo/CardInfo';

const GrupoFoto = () => (
    <div className="grupo">
      <h2>FOTO</h2>
    </div>
);

const CARDS = [
    {
      icon: MissaoIcon,
      title: "Missão",
      content: "Criar um ambiente acolhedor, onde as meninas se sintam encorajadas e confiantes para explorar seu potencial na computação."
    },
    {
      icon: MetaIcon,
      title: "Meta",
      content: "Aumentar o número de meninas nos cursos de tecnologia em nossa região e incentivar sua permanência. Alcançar uma representação equitativa de gênero em nossa universidade."
    },
    {
      icon: ObjetivoIcon,
      title: "Objetivo",
      content: "Inspirar e capacitar meninas para que se destaquem na área da computação, impulsionando uma cultura inclusiva e diversificada."
    }
];
  
const Postagem = ({ imagem, icone, titulo, data, descricao }) => (
    <div className="postagem">
        <div className="imagem-container">
        <img src={imagem} alt={titulo} className="imagem-evento" />
        <img src={icone} alt="Ícone" className="icone-postagem" />
        </div>
        <div className="card-postagem">
        <div className="conteudo-postagem">
            <h3>{titulo}</h3>
            <p className="data-postagem">📅 {data}</p>
            <div className="texto-e-botao">
            <p className="descricao-postagem">{descricao}</p>
            <button className="botao-ler-mais">Ler mais</button>
            </div>
        </div>
        <div className="rodape-card"></div>
        </div>
    </div>
);

const Inicio = () => {
    return (
    <>
        <GrupoFoto />
        <div className="section-container">
            <div className="section-imagem">
                <img src={ImagemMenina} alt="Menina cor de rosa com flores" />
            </div>
            <div className="section-texto-gatech">
                <h1>GATECH</h1>
                <p>
                    O GaTech - <b>Garotas Tech dos Sertões de Crateús</b> é um projeto de extensão que incentiva e busca promover a inclusão e o interesse de mulheres na área da TI.
                </p>
                <p>
                    Reconhecemos a importância de criar um ambiente <b>inclusivo e acolhedor</b>, onde as meninas se sintam empoderadas e confiantes para explorar todo o potencial.
                </p>
                <p>
                    Oferecemos uma variedade de atividades e iniciativas motivacionais, desde palestras, encontros e projetos.
                </p>
            </div>            

            <div style={{ marginBottom: "2rem" }}></div>

            {/* Cards */}
            <div className="cards-container">
                {CARDS.map((obj, index) => (
                <CardInfo key={index} icon={obj.icon} title={obj.title}>
                    {obj.content}
                </CardInfo>
                ))}
            </div>
            
            {/* Postagens */}
            <section className="ultimas-postagens">
                <h2 className="titulo-postagens">Últimas Postagens</h2>            
                <Postagem
                    imagem={ImagemEvento1}
                    icone={IconeGraduacao}
                    titulo="Conectando meninas com a tecnologia!"
                    data="17 de abril de 2025"
                    descricao="Apresentamos o projeto 'Panorama da entrada e permanência das mulheres na área de TI' na EEEP Manoel Mano, em Crateús..."
                />
                
                <Postagem
                    imagem={ImagemEvento2}
                    icone={IconeCoracao}
                    titulo="Oportunidade para meninas do ensino médio!"
                    data="17 de abril de 2025"
                    descricao="A UFC está selecionando 35 bolsistas para o projeto “Panorama da entrada e permanência das mulheres na área de TI”..."
                />
            </section>        
        </div>
    </>
    );
};
  
export default Inicio;