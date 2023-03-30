import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import MagicCalculator from '../pages/MagicCalculator';
import DailyQuote from '../pages/DailyQuote';
import NotFound from '../pages/NotFound';
import '../styles/App.css';

const App = () => (
  <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<MagicCalculator />} />
        <Route path="quote" element={<DailyQuote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);

export default App;
