import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import Book from './Book'


class SearchPage extends React.Component {
    state = {
        query: '',
        searchedBooks: []
    }

    updateQuery = (query) => {
        this.setState({

            query: query
        })
        this.getSearchedBooks(query);
    }

    getSearchedBooks = (query) =>{
        if (query){
        BooksAPI.search(query).then((searchedBooks => {
            if (searchedBooks.error) {
                this.setState ({ searchedBooks: [] });
            } else {
            this.setState({ searchedBooks: searchedBooks});
            }
        })
        )
    } else {
        this.setState({ searchedBooks: []});
        }
    }

    render(){
        return(
            <div className="list-books">
            <HamburgerMenu/>
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
            <div className="search-books">
                <div className="search-books-bar">
                <Link
                to= "/"
                 className="close-search"
                 >Close
                 </Link>
                    <div className="search-books-input-wrapper">
                         <input
                         type="text"
                         placeholder="Search by title or author"
                         value = {this.state.query}
                         onChange = {(event) => this.updateQuery(event.target.value)}
                         />
                         <ol className="books-grid">
                         {
                             this.state.searchedBooks.map(searchedBook => {
                                 let shelf = 'none';
                                 this.props.books.map(book => (
                                     book.id === searchedBook.id ?
                                     shelf = book.shelf :
                                     ''
                                 ));
                                 return (
                                     <li key = {searchedBook.id}>
                                     <Book
                                     book = {searchedBook}
                                     moveShelf = {this.props.moveShelf}
                                     currentShelf = {shelf}
                                     />
                                     </li>

                                 );
                             })
                         }
                         </ol>
                    </div>
                </div>
                <div className="search-books-results">

                </div>
            </div>
            </div>
        )
    }
}
export default SearchPage
