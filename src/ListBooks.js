import React, { Component } from 'react'
import ShowBook from './ShowBook'

class ListBooks extends Component {

    render(){
        const books = this.props.books 
        const shelf = this.props.shelf
        const updateBookStatus = this.props.updateBookStatus
        
        return (
            <div>
                <h2>{shelf}</h2>
                <ol className="books-grid">
                    {books.map(book=> (
                        <ShowBook
                            book={book}
                            key={book.title}
                            updateBookStatus={updateBookStatus}
                        />
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListBooks