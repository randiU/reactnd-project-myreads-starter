import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
	render() {
    let displayedThumbnail = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail : '';

    const book = this.props.book
		return (			
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${displayedThumbnail}")` }}></div>
              <BookShelfChanger 
              book={book}
              moveShelf={this.props.moveShelf}
              currentShelf={this.props.currentShelf}
              />
            </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
			)
	}
}


export default Book