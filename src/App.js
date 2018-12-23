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

//https://github.com/sarah-maris/reactnd-project-myreads/blob/master/src/components/App.js
  moveShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      console.log(response);
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });

  };

  render() {
    return (
      <div className="app">
          <Route path="/search" render={() => (
            <Search 
              moveShelf={this.moveShelf}
            />) 
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
