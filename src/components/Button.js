import PropTypes from 'proptypes';

const Button = ({ name }) => (
  <button type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
