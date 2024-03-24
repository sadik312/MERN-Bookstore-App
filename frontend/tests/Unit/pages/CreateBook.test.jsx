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
});