import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {
	render() {
		return (
			<div>
				<div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <Book />
                    </ol>
                  </div>
                </div>
        </div>
      </div>
			)
	}
}

export default Shelf