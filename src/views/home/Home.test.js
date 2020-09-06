import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders', () => {
  const { queryByText } = render(<Home />);
  const linkElement = queryByText(/Magazine da Leh/i);
  expect(linkElement).toBeInTheDocument();
});
