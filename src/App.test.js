import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Smart Spend header', () => {
  render(<App />);
  const header = screen.getByRole('heading', { name: /Smart\s+Spend/i });
  expect(header).toBeInTheDocument();
});
