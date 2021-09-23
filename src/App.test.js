import { render, screen } from '@testing-library/react';
import App from './App';

test('text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Finding Falcone!/i);
  expect(linkElement).toBeInTheDocument();
});
