import React from 'react';
import { render } from '@testing-library/react';
import Products from './Products';

test('renders products', () => {
  const { getByText } = render(<Products />);
  const linkElement = getByText(/Produtos/i);
  expect(linkElement).toBeInTheDocument();
});
