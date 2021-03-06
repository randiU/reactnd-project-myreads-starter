import React, {Component} from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class MainContent extends Component {
	render() {
		return (
			<div className="list-books">
            	<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>
            	<div className="list-books-content">
              		<Shelf 
                  bookList={this.props.books}
                  moveShelf={this.props.moveShelf}
                  />
            	</div>
            	<div className="open-search">
              			<Link to="/search">
              				<button>
              					Add a Book
              				</button>
              			</Link>
            	</div>
          	</div>
			)
	}
}

export default MainContent