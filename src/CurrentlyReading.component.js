import React, { Component } from 'react';
import BookShelf from './BookShelf.component.js'
class CurrentlyReading extends Component{
    render (){
        return (
          <BookShelf title="Currently reading" manageBookShelf={this.props.manageBookShelf} booksList={this.props.booksList} />
        )
    }
}
export default CurrentlyReading