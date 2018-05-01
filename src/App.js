import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage.component.js'
import HomeList from './HomeList.component.js'
import BookPreview from './BookPreview.component.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  componentDidMount(){
   BooksAPI.getAll().then((books)=>{
            let wantToRead = [];
            let read = [];
            let booksCurrentlyReading = [];
     
     books.forEach(function(elem){
     	switch(elem.shelf){
          case "wantToRead" :
            wantToRead.push(elem);
            break;
          case "currentlyReading" :
            booksCurrentlyReading.push(elem);
            break;
          case "read" :
            read.push(elem);
            break;
          default:
            break;
        }
     })
   	this.setState({
            wantToRead: wantToRead,
            read: read,
            currentlyReading: booksCurrentlyReading
    })
   })
  }
  manageBookShelf = (book, shelf) => {
    
        BooksAPI.update(book, shelf).then(()=>{
                  let booksWantToRead = this.state.wantToRead.filter((item)=>(item.id!==book.id));
                  let booksRead = this.state.read.filter((item)=>(item.id!==book.id));
                  let booksCurrentlyReading = this.state.currentlyReading.filter((item)=>(item.id!==book.id));
          
          book.shelf = shelf;
          switch(shelf){
            case 'currentlyReading':
              booksCurrentlyReading.push(book);
              break;
            case 'wantToRead':
              booksWantToRead.push(book);
              break;
            case 'read':
              booksRead.push(book);
              break;
            case 'none':
              break;
            default:
              break;
          }

          this.setState({
            wantToRead: booksWantToRead,
            read: booksRead,
            currentlyReading: booksCurrentlyReading
          });
        });
  }
  
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
  render() {
    return (
      <div className="app">
       {/*
       	hi Udacity guy
      	before i tried use "component" no render but i couldn't pass data (method and shelfs) to this component
        Meybe you can give me any advice?
       */}
         <Route path="/search" render={props=><SearchPage manageBookShelf={this.manageBookShelf} />}
       		/>
         <Route path="/book/:idBook" render={props=><BookPreview {...props} manageBookShelf={this.manageBookShelf} />}
       		/>
         <Route path="/" exact render={props=><HomeList manageBookShelf={this.manageBookShelf}
       		currentlyReading={this.state.currentlyReading}
       		wantToRead={this.state.wantToRead}
       		read={this.state.read}/>} 
       		/>
      </div>
    )
  }
}

export default BooksApp
