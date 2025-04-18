import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    const appContainer = getByTestId('app-container');
    expect(appContainer).toBeTruthy();
  });
});