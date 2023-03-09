import { render, screen } from '@testing-library/react';
import App from '../../App';

test('My application is working 😊', () => {
  render(<App />);
  const linkElement = screen.getByText(/Photos/i);
  expect(linkElement).toBeInTheDocument();
});
