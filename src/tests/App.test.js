import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders math magicians link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Math Magicians/i);
  expect(linkElement).toBeInTheDocument();
});
