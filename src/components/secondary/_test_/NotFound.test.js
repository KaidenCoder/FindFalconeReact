import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';

test('text', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/Queen AI Falcon cannot be found/i);
  expect(linkElement).toBeInTheDocument();
});

