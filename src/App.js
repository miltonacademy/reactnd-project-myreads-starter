import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchBooks from './Search'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBookStatus = (bookStatus, book) => {
  
    BooksAPI.update(book,bookStatus).then(()=>{
      book.shelf=bookStatus
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([ book ])
      }))
    })
  }  

  render() {


    return (
      <div className="app">           
            <Route exact  path="/" render={()=> (
              <div id="myReadsHome">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books">
                  <BookShelves
                    books={this.state.books}
                    updateBookStatus={this.updateBookStatus}
                  />
                </div>
              <Link
                    to="/search"
                    className="open-search"
              ><span>Add a book</span></Link>
              </div>  
            )}/>  
            <Route exact  path="/search" render={()=> (
              <SearchBooks 
                books={this.state.books}
                updateBookStatus={this.updateBookStatus}
                />
            )}/>
      </div>
    )
  }
}

export default BooksApp
