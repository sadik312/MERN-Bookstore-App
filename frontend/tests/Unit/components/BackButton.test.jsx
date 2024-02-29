// components/BackButton.jsx

import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
import BackButton from "../../../components/BackButton";
import { BrowserRouter as Router } from "react-router-dom";

describe('BackButton', () => {
    test('renders BackButton with default destination', () => {
        render(
            <Router>
                <BackButton />
            </Router>
        );
        const backButton = screen.getByRole('link');
        expect(backButton).toBeInTheDocument();
    });

})