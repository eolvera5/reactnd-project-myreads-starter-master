import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu.js'

class MainPage extends React.Component {
    render(){
        return (
    <div className="list-books">
    <HamburgerMenu />
    <div className="list-books-title">
      <h1>My Reads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
        <Link to = "/currentlyReading"><h2 className="bookshelf-title">Currently Reading</h2></Link>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
                this.props.books
                .filter(book => book.shelf === 'currentlyReading')
                .map(book => (
                    <li key = {book.id}>
                        <Book
                        book = {book}
                        moveShelf = {this.props.moveShelf}
                        currentShelf = 'currentlyReading'
                         />
                    </li>
                ))
            }
              </ol>
            </div>
        </div>
        <div className="bookshelf">
          <Link to = "/WantToRead"><h2 className="bookshelf-title">Want to Read</h2></Link>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                .filter(book => book.shelf === 'wantToRead')
                .map(book => (
                    <li key = {book.id}>
                        <Book
                        book = {book}
                        moveShelf = {this.props.moveShelf}
                        currentShelf = 'wantToRead'
                         />
                    </li>
                ))
            }
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <Link to = "/inProgress"><h2 className="bookshelf-title">In Progress</h2></Link>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
                this.props.books
                .filter(book => book.shelf ==='read')
                .map(book => (
                    <li key = {book.id}>
                        <Book
                        book = {book}
                        moveShelf = {this.props.moveShelf}
                        currentShelf='read'
                         />
                    </li>
                ))
            }
            </ol>
          </div>
        </div>

    </div>
    <div className="open-search">
      <Link
      to ="/search"
      >Add a book
      </Link>
    </div>
  </div>
  </div>
        )
    }
}
export default MainPage
