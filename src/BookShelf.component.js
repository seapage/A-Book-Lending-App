import React, { Component } from 'react';
import Book from './Book.component.js'
class BookShelf extends Component{
  
    render (){
        return (
          <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.booksList.map((value)=>(
                        <li key={value.id}>
                      		<Book manageBookShelf={this.props.manageBookShelf} bookData={value} />
                      	</li>
        			))}
                    </ol>
                  </div>
        </div>
        )
    }
}
export default BookShelf