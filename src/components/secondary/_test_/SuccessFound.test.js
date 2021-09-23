import { render, screen } from '@testing-library/react';
import SuccessFound from '../SuccessFound';

test('text', () => {
  render(<SuccessFound />);
  const linkElement = screen.getByText(/Congratulations on Finding Falcone/i);
  expect(linkElement).toBeInTheDocument();
});
