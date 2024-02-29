// BooksTable.test.js

const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const { describe, it } = require('mocha');
const { render } = require('@testing-library/react');
const React = require('react');
const { BrowserRouter } = require('react-router-dom');
const BooksTable = require('./BooksTable');

describe('BooksTable', () => {
  it('renders table with books data and action links', () => {
    const books = [
      {
        _id: '1',
        title: 'Book 1',
        author: 'Author 1',
        publishYear: '2022',
      },
      {
        _id: '2',
        title: 'Book 2',
        author: 'Author 2',
        publishYear: '2023',
      },
    ];

    // Mocking window object for React Testing Library
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;

    const { getByText, getAllByRole } = render(
      <BrowserRouter>
        <BooksTable books={books} />
      </BrowserRouter>
    );

    // Assert table headings
    expect(getByText('No')).to.exist;
    expect(getByText('Title')).to.exist;
    expect(getByText('Author')).to.exist;
    expect(getByText('Publish Year')).to.exist;
    expect(getByText('Actions')).to.exist;

    // Assert book data
    books.forEach((book, index) => {
      expect(getByText((index + 1).toString())).to.exist; // No column
      expect(getByText(book.title)).to.exist;
      expect(getByText(book.author)).to.exist;
      expect(getByText(book.publishYear)).to.exist;
    });

    // Assert action links
    const actionLinks = getAllByRole('link');
    expect(actionLinks).to.have.lengthOf(books.length * 3); // 3 action links per book
    actionLinks.forEach(link => {
      expect(link.getAttribute('href')).to.exist; // Check if link has href attribute
    });
  });
});
