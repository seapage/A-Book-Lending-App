import React, { Component } from 'react';
import BookShelf from './BookShelf.component.js'
class Read extends Component{
    render (){
        return (
          <BookShelf title="Read" manageBookShelf={this.props.manageBookShelf} booksList={this.props.booksList} />
        )
    }
}
export default Read