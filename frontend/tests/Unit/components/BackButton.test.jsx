// components/BackButton.jsx

import React from "react";
import { getByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackButton from "../../../components/BackButton";
import { BrowserRouter } from "react-router-dom";

/*
describe('BackButton', () => {
    test('renders BackButton with default destination', () => {
        
    });

})
*/

test('renders BackButton with default destination', () => {
    const { container } = render(
    <BrowserRouter>
        <BackButton id="back-button"/>
    </BrowserRouter>
    );
  
    // Verify that the BackButton renders with the default destination '/'
    const backButtonLink = container.querySelector('#back-button');
    expect(backButtonLink).toHaveAttribute('href', '/');
    expect(backButtonLink).toBeInTheDocument(); // Verify element is in the document
});