import PropTypes from 'proptypes';

const Quote = ({ quote, author }) => (
  <>
    <h2>Today&apos;s Quote</h2>
    <q>
      {quote}
    </q>
    <p>
      {author}
    </p>
  </>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
