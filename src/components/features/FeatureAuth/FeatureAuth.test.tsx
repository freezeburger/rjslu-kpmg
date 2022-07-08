import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureAuth from './FeatureAuth';

describe('<FeatureAuth />', () => {
  test('it should mount', () => {
    render(<FeatureAuth />);
    
    const featureAuth = screen.getByTestId('FeatureAuth');

    expect(featureAuth).toBeInTheDocument();
  });
});