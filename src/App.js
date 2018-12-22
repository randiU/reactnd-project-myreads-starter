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
        //{books} = {books: books}
        this.setState( {books:books} )
      })
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
            />) 
            }/>
      </div>
    )
  }
}

export default BooksApp
