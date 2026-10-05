import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the sample workspace and opens the create menu', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /good morning/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /new item/i }));
  expect(screen.getByRole('menuitem', { name: /project/i })).toBeInTheDocument();
});
