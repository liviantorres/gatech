// components/CardInfo/CardInfo.jsx
import PropTypes from 'prop-types';
import './CardInfo.css';

export const CardInfo = ({ icon, title, children }) => (
  <div className="card">
    <div className="card-header">
      <img src={icon} alt={title} className="card-icon" />
      <h3 className="card-title">{title}</h3>
    </div>
    <div className="card-body">
      <p>{children}</p>
    </div>
  </div>
);

CardInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};