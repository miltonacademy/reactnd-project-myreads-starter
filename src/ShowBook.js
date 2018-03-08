import React, { Component } from 'react'
//import * as BooksAPI from './BooksAPI'

class ShowBook extends Component {
    render = () => {
        const book = this.props.book
        const updateBookStatus = this.props.updateBookStatus

        return (
            <li key={book.title}>
                <div className="book">
                <div className="test">
                    
                </div>
                <div className="book-top">
                    {book.imageLinks && book.imageLinks.thumbnail ? (
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + book.imageLinks.thumbnail + ")" }}></div>
                    ) : (
                        <div className="book-cover" style={{ width: 128, height: 193}}>cover image unavailable</div>
                    )}
                    <div className="book-shelf-changer">
                    <select
                        onChange={(event)=> updateBookStatus(event.target.value, book)} 
                        value={book.shelf!==undefined ? (
                            book.shelf
                        ) : (
                            "none"
                        )
                        }
                        >
                        <option value="noValue" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors ? (
                    <div className="book-authors">{book.authors.join(" and ")}</div>
                ) : (
                    <div className="book-authors"><b>THIS BOOK EMERGED FROM THE VOID THROUGH MAGIC!</b></div>
                )
                }
                <div>THE SHELF IS {book.shelf}</div>
                </div>
            </li>
        )
    }
}

export default ShowBook