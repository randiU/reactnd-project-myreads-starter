import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import MainContent from './MainContent'
import {Route} from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
   
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState( {books:books} )
      })
    }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
        this.setState( {books:books} )
      });
    console.log(this.state.books);
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
            <Search />) 
            }/>
      
          <Route exact path="/" render={() => (
            <MainContent 
              books={this.state.books}
              moveShelf={this.moveShelf}
            />) 
            }/>
      </div>
    )
  }
}

export default BooksApp
