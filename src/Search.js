import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
	state = {
		query: '',
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		})
		this.updateSearchedBooks(query);
	}

	updateSearchedBooks = (query) => {
		//we only fetch books if there is a query
		if (query) {
			//finds searched books based on query and returns object as searchedBooks
			BooksAPI.search(query).then((searchedBooks) => {
				if (searchedBooks.error) {
					//if there is an error we set the searchedBooks array to be empty
					this.setState({searchedBooks: []})
				} else {
					//we set the searchedBooks to the list provided which will then be mapped over
					this.setState({searchedBooks: searchedBooks});
				}		
			})
		} else {
			this.setState({searchedBooks: []})
		}
	}


	render() {


		return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                	type="text" 
                	placeholder="Search by title or author" 
                	value= {this.state.query}
                	/* on change, the event will be captured and then we update the value of the section
                	based on the event */
                	onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {/*maps over each item in searchedBooks and creates an li element with the book 
              component in it */}
              	{this.state.searchedBooks.map(searchedBook => {
              		//makes the default on the search page as none
              		let shelf= "none";
              		//grabbing the books in the MaingContent.js state
              		this.props.books.map(book => (
              			book.id === searchedBook.id ?
              			//assigns the shelf variable if a book is already
              			//in the book state array to be the current shelf
              			//not none
              			shelf = book.shelf :
              			''
              			));
              		return(
		              	<li key={searchedBook.id}>
		              		<Book 
		              			book={searchedBook}
		              			moveShelf={this.props.moveShelf}
		              			currentShelf={shelf}		              		/>
		              	</li>
              			)
              		})
              	}
              </ol>
            </div>
          </div>
			)
	}
}

export default Search