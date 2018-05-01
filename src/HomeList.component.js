import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import CurrentlyReading from './CurrentlyReading.component.js'
import WantToRead from './WantToRead.component.js'
import Read from './Read.component.js'

class HomeList extends Component{
  
  
    render (){
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           <div className="list-books-content">
          		<div>
          {console.log(this)}
                  <CurrentlyReading manageBookShelf={this.props.manageBookShelf} booksList={this.props.currentlyReading} />
                  <WantToRead  manageBookShelf={this.props.manageBookShelf} booksList={this.props.wantToRead} />
                  <Read manageBookShelf={this.props.manageBookShelf} booksList={this.props.read} />
           		</div>
           </div>
            <div className="open-search">
          	  <Link className="close-search" to="/search">Add a book</Link>
            </div>
           </div>
        )
    }
}
export default HomeList;