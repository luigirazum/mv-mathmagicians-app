import PropTypes from 'proptypes';

const Button = ({ name, classType, tbindex }) => (
  <button type="button" className={classType} tabIndex={tbindex}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  tbindex: PropTypes.number.isRequired,
};

export default Button;
