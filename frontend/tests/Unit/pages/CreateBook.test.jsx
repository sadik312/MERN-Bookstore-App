import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';
import CreateBook from "../../../src/pages/CreateBook";
import { BrowserRouter } from "react-router-dom";

describe('CreateBook', () => {
    test('renders without crashing', () => {
        <BrowserRouter>
            <CreateBook />
        </BrowserRouter>
    });

    test('allows user to input values and submit form', async () => {
        const { getByLabelText, getByText } = render(
            <BrowserRouter>
                <CreateBook />
            </BrowserRouter>
        );

        // Get input elements
        const titleInput = getByLabelText('Title');
        const authorInput = getByLabelText('Author');
        const publishYearInput = getByLabelText('Publish Year');

        // Fill in form values
        fireEvent.change(titleInput, { target: {value : 'Test Title' } });
        fireEvent.change(authorInput, { target: { value: 'Test Author' } });
        fireEvent.change(publishYearInput, {target: { value: '2022' } });

        // submit form
        fireEvent.click(getByLabelText('Save'));
    })
});