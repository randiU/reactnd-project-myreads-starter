import React, {Component} from 'react'
import Book from './Book'


class Shelf extends Component {
	render() {

    const shelfCategories = [ 
    {category: 'currentlyReading' , name: 'Currently Reading' },
    {category: 'wantToRead', name: 'Want To Read' },
    {category: 'read', name: 'Read'}
    ]
    const bookList = this.props.bookList
		return (
			<div>
      {console.log(bookList)}
        {shelfCategories.map(type => (
            <div className="bookshelf" key={type.category}>
                <h2 className="bookshelf-title">{type.name}</h2>
                <div>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        bookList.filter(book => book.shelf === 
                          type.category).map(book => (
                            <li key={book.id}>
                              <Book book={book}/>
                            </li>
                          ))
                      }
                    </ol>
                  </div>
                </div>
            </div>
          ))
      }
      }
				
      </div>
			)
	}
}

export default Shelf