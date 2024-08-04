import { expect, test , vi } from 'vitest'
import NavBar from './NavBar.jsx';
import {fireEvent, render} from "@testing-library/react";

test('The NavBar component should render', () => {
  const view = render(<NavBar />);
  expect(view).toMatchSnapshot();
});

test('The NavBar component should render with a title', () => {
  const title = 'Test application';
  render(<NavBar title={title} />);

  expect(screen.getByRole('heading')).toMatch(title);
});

test('The NavBar component should respond to button clicks', () => {
  const mockFunction = vi.fn();
  render(<NavBar goBack={mockFunction} openForm={mockFunction} />);

  fireEvent.click(screen.getByText('< Go Back'));
  expect(mockFunction).toHaveBeenCalled();

  fireEvent.click(screen.getByText('+ Add Review'));
  expect(mockFunction).toHaveBeenCalledTimes(2);
});
