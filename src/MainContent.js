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
              		<Shelf />
            	</div>
            	<div className="open-search">
              		<button onClick={() => console.log('clicked!')}>
              			<Link to="/search">Add a Book</Link>
              		</button>
            	</div>
          	</div>
			)
	}
}

export default MainContent