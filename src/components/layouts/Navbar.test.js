import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('renders brand text', () => {
  const { getByText } = render(<Navbar />);
  const brand = getByText(/Magazine da Leh/i);
  expect(brand).toBeInTheDocument();
});
