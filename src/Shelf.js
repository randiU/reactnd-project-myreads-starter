import React, {Component} from 'react'
import Book from './Book'


class Shelf extends Component {
	render() {

    const shelfCategories = [ 
    {category: 'currentlyReading' , name: 'Currently Reading' },
    {category: 'wantToRead', name: 'Want To Read' },
    {category: 'read', name: 'Read'}
    ]

		return (
			<div>
        {shelfCategories.map(type => (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{type.name}</h2>
                <div>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <Book />
                    </ol>
                  </div>
                </div>
            </div>
          ))
      }
				
      </div>
			)
	}
}

export default Shelf