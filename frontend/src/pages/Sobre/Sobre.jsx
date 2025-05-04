import './Sobre.css'
import '../../styles/global.css';
import { Timeline } from '../../components/Timeline/Timeline';
import { CardInfo } from '../../components/CardInfo/CardInfo';

import LogoRosa from '../../assets/logo-gatech-rosa.png';
import ImagemLogoRedondo from '../../assets/logo-redondo-gatech-sobre.png';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import LampadaIcon from '../../assets/icone-lampada.png';
import MetaIcon from '../../assets/icone-meta.png';
import FemininoIcon from '../../assets/icone-feminino.png';
import ImagemJornadaWit from '../../assets/jornada-wit.jpeg';
import LiveIcon from '../../assets/icone-live.png';
import MedalhaIcon from '../../assets/icone-medalha.png';
import FilmeIcon from '../../assets/icone-filme.png';
import OkIcon from '../../assets/icone-ok.png';
import CoracaoIcon from '../../assets/icone-coracao.png';
import GraduacaoIcon from '../../assets/icone-graduacao.png';

const OBJETIVOS = [
    {
      icon: FemininoIcon,
      title: "Inclusão",
      content: "Promover ativamente a inclusão das mulheres na área de TI, criando um ambiente acolhedor e estimulante."
    },
    {
      icon: MetaIcon,
      title: "Engajamento",
      content: "Estimular o envolvimento ativo das mulheres na comunidade de tecnologia, promovendo a colaboração, participação e troca de experiências entre as participantes."
    },
    {
      icon: LampadaIcon,
      title: "Desenvolvimento",
      content: "Fomentar o crescimento pessoal e profissional das participantes, oferecendo oportunidades de aprendizado e desenvolvimento de habilidades."
    }
];

const TIMELINE_EVENTS = [
    {
        imagem:ImagemJornadaWit,
        icone:GraduacaoIcon,
        titulo:"Oficina de Teste de Software",
        descricao:"Ministrada pelas alunas integrantes do projeto Ariadna Miranda e Agatha Martins, a oficina teve como objetivo proporcionar aos participantes conhecimentos práticos e teóricos sobre testes de software, uma área fundamental na qualidade de produtos de tecnologia."
    },
    {
        imagem:ImagemJornadaWit,
        icone:OkIcon,
        titulo:"Artigo Aceito no WIT 2020",
        descricao:"Nosso artigo “Ações Iniciais do Projeto de Extensão para Captação e Retenção de Meninas aos Cursos de TI” foi aceito para publicação e apresentação como artigo curto no Women in Information Technology 2020, evento que discute questões de gênero e TI no Brasil."
    },
    {
        imagem:ImagemJornadaWit,
        icone:LiveIcon,
        titulo:"Programa Quarta com Elas",
        descricao:"Durante a pandemia, realizamos lives no Instagram com convidadas especiais todas as quartas-feiras, abordando temas sobre tecnologia e as experiências femininas na área. Essas lives proporcionaram um espaço de troca de conhecimento e inspiração para as participantes, ampliando o diálogo sobre a presença das mulheres na TI."
    },
    {
        imagem:ImagemJornadaWit,
        icone:FilmeIcon,
        titulo:"GaTIP (GaTech Tips)",
        descricao:"Oferecemos recomendações de filmes e documentários com temas sobre tecnologia, ciência, realidade feminina e superação no nosso instagram. Esse programa visa enriquecer o repertório cultural para o público alvo, proporcionando inspiração e reflexão sobre questões sociais e profissionais relacionadas à área de TI."
    },
    {
        imagem:ImagemJornadaWit,
        icone:MedalhaIcon,
        titulo:"Reconhecimento no WIT 2020",
        descricao:"Nosso artigo foi premiado em primeiro lugar na Categoria Melhor Artigo Curto no Women in Information Technology 2020."
    },
    {
        imagem:ImagemJornadaWit,
        icone:CoracaoIcon,
        titulo:"Participação no WIT e Fórum Meninas Digitais",
        descricao:"Estivemos presentes no 16º Women in Information Technology e Fórum Meninas Digitais, evento-base do 48º Congresso da Sociedade Brasileira de Computação, na cidade de Niterói, RJ.Fomos representados pela aluna Agatha Martins e pela Profa. Simone Santos. "
    }
];

const Sobre = () => {
  return (
    <>
        <div className="section-container-titulo">
            <img src={LogoRosa} alt="Logo Gatech Rosa"  className="imagem-logo-rosa"/>
            <h2 className="titulo">Sobre nós</h2> 
        </div>

        <div className="section-container">
            <div className="section-imagem-logo">
            <img src={ImagemLogoRedondo} alt="Logo gatech dentro de círculo roxo" />
            </div>
            <div className="text-block">
                <p>
                    O projeto "Garotas Tech dos Sertões de Crateús" (GaTech) é uma iniciativa dedicada a promover 
                    a inclusão das meninas dos cursos de TI da UFC do campus de Crateús, além de incentivar mais 
                    alunas a ingressarem nessa área. Iniciado em 2019, o GaTech surgiu da visão das professoras [nomes], 
                    impulsionado pelo desejo de criar oportunidades igualitárias e inspiradoras para as mulheres no cenário 
                    tecnológico, tanto dentro quanto fora do campus da UFC de Crateús.
                </p>
            </div>
                
            <h2>Contexto e Motivação</h2> 
            <div className="text-block">
                <p>
                    Diante da representatividade feminina ainda reduzida na indústria de tecnologia, o <b>Gatech</b> surge como uma resposta 
                    ativa para equilibrar essa disparidade de gênero. Nosso objetivo primordial é criar um ambiente inclusivo que 
                    estimule o crescimento profissional e pessoal das participantes, além de promover a permanência das mulheres 
                    nos cursos de TI do campus e despertar o interesse por TI entre alunas do ensino médio regular e profissionalizante da região.
                </p>
            </div>

            <ImageCarousel />

            <div className="text-block">
                <p>
                    Para alcançar esse propósito, nosso compromisso inicial é estabelecer um ambiente estimulante e 
                    acolhedor, onde as meninas se sintam encorajadas e confiantes para explorar todo o seu potencial 
                    na computação. Por meio de uma variedade de atividades, como palestras, bate-papos, workshops e 
                    visitas em escolas, buscamos oferecer experiências enriquecedoras que inspirem as alunas a se 
                    envolverem ativamente na área de tecnologia, tanto no âmbito acadêmico quanto profissional, além 
                    de levar informações sobre os cursos para as estudantes da região.
                </p>
            </div>

            <h2>Objetivos</h2> 
            {/* Cards */}
            <div className="cards-container">
                {OBJETIVOS.map((obj, index) => (
                <CardInfo key={index} icon={obj.icon} title={obj.title}>
                    {obj.content}
                </CardInfo>
                ))}
            </div>
            
            <div className="text-block">
                <h2>Nossa Jornada até Agora</h2>             
                <p>
                    Desde o seu início, o GaTech tem se dedicado a promover uma série de iniciativas para alcançar seus objetivos.
                    Separamos alguns acontecimentos importantes:
                </p>
            </div>

            {/* Timeline/jornada */}
            <section className="timeline-section">
                {TIMELINE_EVENTS.map((event, index) => (
                    <Timeline key={index} {...event} />
                ))}
            </section>
        </div>
    </>
  )
}

export default Sobre