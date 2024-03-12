// components/BackButton.jsx

import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import BackButton from "../../../components/BackButton";

/*
describe('BackButton', () => {
    test('renders BackButton with default destination', () => {
        
    });

})
*/

test('renders BackButton with default destination', () => {
    const { getByTestId } = render(<BackButton />);
  
    // Verify that the BackButton renders with the default destination '/'
    const backButtonLink = getByTestId('back-button-link');
    expect(backButtonLink).toHaveAttribute('href', '/');
});