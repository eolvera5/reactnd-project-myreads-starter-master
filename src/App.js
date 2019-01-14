import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import CurrentlyReading from './CurrentlyReading'
import InProgress from './InProgress'
import WantToRead from './WantToRead'
import { Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path ="/" render = {() => (
        <MainPage
        books = {this.state.books}
        moveShelf={this.moveShelf}
        />
        )} />
        <Route path = "/search" render ={() => (
        <SearchPage
        moveShelf={this.moveShelf}
        books = {this.state.books}
        />
        )} />
        <Route path = "/CurrentlyReading" render ={() => (
        <CurrentlyReading
        moveShelf={this.moveShelf}
        books = {this.state.books}
        />
        )} />
        <Route path = "/WantToRead" render ={() => (
        <WantToRead
        moveShelf={this.moveShelf}
        books = {this.state.books}
        />
        )} />
        <Route path = "/InProgress" render ={() => (
        <InProgress
        moveShelf={this.moveShelf}
        books = {this.state.books}
        />
        )} />
      </div>
    )
  }
}

export default App


/* https://www.youtube.com/watch?v=i6L2jLHV9j8 */
/* based on this google hangout tutorial*/
