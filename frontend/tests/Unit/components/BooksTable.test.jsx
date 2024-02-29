// BooksTable.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BooksTable from '../../../components/home/BooksTable';

describe('BooksTable', () => {
    test('renders BooksTable with books', () => {
        const books = [
            {
                _id: '1',
                title: 'Book 1',
                author: 'Author 1',
                publishYear: '2022'
            }
        ];

        render(
            <Router>
                <BooksTable books={books} />
            </Router>
        );

        // Assert the table headings
        expect(screen.getByText('Title')).toBeInTheDocument();
    })
})