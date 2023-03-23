import { useEffect, useState } from 'react';
import { API_URL, HEADERS_LIST } from './api/apiSettings';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/Quote';
import './assets/styles/App.css';

const App = () => {
  const [dailyQuote, setDailyQuote] = useState({ quote: '', author: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async (quoteType = 'inspirational') => {
      setIsLoading(true);

      const fetchUrl = `${API_URL}${quoteType}`;
      const request = new Request(
        fetchUrl, {
          method: 'GET',
          'Content-Type': 'application/json',
          headers: HEADERS_LIST,
        },
      );

      try {
        const response = await fetch(request);
        const [json] = await response.json();
        setDailyQuote((prev) => ({
          ...prev,
          ...json,
        }));

        setHasError(false);
      } catch (error) {
        setHasError(true);
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchQuote();
  }, []);

  return (
    <>
      <h1>Welcome to Math Magicians</h1>
      <Calculator />
      { isLoading
        ? (<p>Daily Quote is Loading...</p>)
        : (
          <Quote
            quote={dailyQuote.quote}
            author={dailyQuote.author}
          />
        ) }
      { hasError && <p>Something went wrong while fetching the daily quote.</p> }
    </>
  );
};

export default App;
