import PropTypes from 'proptypes';

const Display = ({ content }) => (
  <p className="display">{content}</p>
);

Display.propTypes = {
  content: PropTypes.string,
};

Display.defaultProps = {
  content: '0',
};

export default Display;
