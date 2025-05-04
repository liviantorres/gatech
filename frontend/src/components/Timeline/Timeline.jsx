import PropTypes from 'prop-types';
import './Timeline.css';

export const Timeline = ({ imagem, icone, titulo, descricao }) => (
    <div className="timeline-item">
        <div className="timeline-image-container">
        <img src={imagem} alt={titulo} className="timeline-event-image" />
        <img src={icone} alt="Ícone" className="timeline-icon" />
        </div>
        <div className="timeline-card">
        <div className="timeline-card-content">
            <h3>{titulo}</h3>
            <p className="timeline-card-description">{descricao}</p>
        </div>
        <div className="timeline-card-footer"></div>
        </div>
    </div>
);

Timeline.propTypes = {
    imagem: PropTypes.string.isRequired,
    icone: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
};