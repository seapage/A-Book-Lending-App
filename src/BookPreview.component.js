import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
class Book extends Component{
  constructor() {
    super();
    this.state = {
  		book: undefined
  	}
    //here i don't understand why when i put state directly in object in render it is null, if state is in constructor everything works fine
  }
  
  componentDidMount(){
  	BooksAPI.get(this.props.match.params.idBook).then((bookResult)=>{
      this.setState({
      	book: bookResult
      });
    })
  }
  
    render (){
      return (
        <div>
        {console.log(this.state)}
        {this.state.book ? (
        	<div className="bookPreview">
        		<img src={this.state.book.imageLinks.thumbnail} alt={this.state.book.title} />
        		<h1>{this.state.book.title}</h1>
       			<h2>Categories </h2>
        		<ul>
        			{this.state.book.categories.map((cat)=>(
        				<li>{cat}</li>
      				))}
        		</ul>
				<p>
					Special description here
				</p>
				
								<select value="" onChange={(event)=>this.props.manageBookShelf(this.state.book.id, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                              </select><br />
          	  <Link to="/">Go to your library</Link><br />
          	  <Link to="/search">Search others books</Link>
        	</div>
		):""}
         </div>
        
        )
    }
  
}
export default Book