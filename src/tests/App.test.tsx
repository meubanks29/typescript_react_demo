import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the App Component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Type something in/i);
  expect(linkElement).toBeInTheDocument();
});
