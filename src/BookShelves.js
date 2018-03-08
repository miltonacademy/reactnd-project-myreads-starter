import React, { Component } from 'react'
import ListBooks from './ListBooks'

class BookShelves extends Component {

    render(){

        const theBookShelves = []
        
        const ShelfNames = [
            {varValue: "read", readableTitle: "Read"},
            {varValue: "currentlyReading", readableTitle: "Currently Reading"},
            {varValue: "wantToRead", readableTitle: "Want to Read"}
        ]
        
        const books = this.props.books
        const updateBookStatus = this.props.updateBookStatus


        ShelfNames.forEach(shelf => {
            theBookShelves.push({shelf: shelf.varValue, readableTitle: shelf.readableTitle, books: books.filter( book => book.shelf===shelf.varValue)})
        })

        return (
            <div>
                {theBookShelves.map((shelf, index)=> (
                    <ListBooks
                        key={index}
                        books={theBookShelves[index].books}
                        shelf={theBookShelves[index].readableTitle}
                        updateBookStatus={updateBookStatus}
                    />
                ))}  
            </div>
        )
    }
}

export default BookShelves