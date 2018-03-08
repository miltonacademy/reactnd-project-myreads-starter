import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import ShowBook from './ShowBook'

class SearchBooks extends Component {
    state = {
        query: '',
        searchResults: []
    }

    

    findBooks = (query) => {
        this.setState({ query: query })
        let showSearchedBooks

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            BooksAPI.search(query)
                .then((response) => {
                    this.setState({ searchResults: response })
                    showSearchedBooks = this.state.searchResults.filter((book) => match.test(book.title))
                    showSearchedBooks = this.state.searchResults.slice(0)

                    const books = this.props.books

                    const hashMap = {}

                    books.forEach(book => {
                        hashMap[book.id] = book.shelf
                    })

                    showSearchedBooks.forEach(book => {
                        if (hashMap[book.id]) {
                            book.shelf = hashMap[book.id]
                        }
                    })
                    this.setState({ searchResults: showSearchedBooks })
                })
                .catch(error => {
                    this.setState({ searchResults: [] })
                })
        } else {
            this.setState({ searchResults: [] })
        }
    }

    render() {
        const { query } = this.state
        const updateBookStatus = this.props.updateBookStatus

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.findBooks(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults.map((book) =>
                            <ShowBook
                                book={book}
                                key={book.id}
                                updateBookStatus={updateBookStatus}
                            />
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks