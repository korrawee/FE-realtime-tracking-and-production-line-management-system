import 'react-native';
import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import App from '../App';

it('shows department card on screen', () => {
  const {getAllByTestId} = render(<App />);

  expect(getAllByTestId('DepartmentCard').length).not.toBe(0);
});

test('Press "รายละเอียด" on card to take you to detail screen.', () => {
  const {getAllByTestId, getByText} = render(<App />);

  fireEvent.press(getAllByTestId('DepartmentCard.DetailLink')[0]);

  getByText('Welcome to detail page of department id 1.');
});
