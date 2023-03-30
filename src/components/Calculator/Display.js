import PropTypes from 'proptypes';

const Display = ({ content, tbindex }) => (
  <p className="display" tabIndex={tbindex}>
    {content || 0}
  </p>
);

Display.propTypes = {
  content: PropTypes.string,
  tbindex: PropTypes.number,
};

Display.defaultProps = {
  content: '0',
  tbindex: 1,
};

export default Display;
