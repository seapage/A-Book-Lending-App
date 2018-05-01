import React, { Component } from 'react';
import BookShelf from './BookShelf.component.js'
class WantToRead extends Component{
    render (){
        return (
          <BookShelf title="Want to read" manageBookShelf={this.props.manageBookShelf} booksList={this.props.booksList} />
        )
    }
}
export default WantToRead