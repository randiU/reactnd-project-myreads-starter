import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import MainContent from './MainContent'
import {Route} from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false,
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        //{books} = {books: books}
        this.setState( {books:books} )
      })
    }

  render() {
    return (
      <div className="app">
      <button onClick={() => console.log(this.state.books)}>click me!</button>
        
          <Route path="/search" render={() => (
            <Search />) 
            }/>
      
          <Route exact path="/" render={() => (
            <MainContent />) 
            }/>
      </div>
    )
  }
}

export default BooksApp
