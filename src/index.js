import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'


//ReactDOM.render is rendering the App.js file into the root div in index.html. 
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
