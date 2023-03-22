import PropTypes from 'proptypes';

const Button = ({
  name, classType, tbindex, onClick,
}) => (
  <button
    type="button"
    name={name}
    className={classType}
    tabIndex={tbindex}
    onClick={onClick}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  tbindex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
