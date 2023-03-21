import PropTypes from 'proptypes';

const Button = ({ name, classType }) => (
  <button type="button" className={classType}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
};

export default Button;
