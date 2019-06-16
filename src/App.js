import React from 'react'
import './App.css'
import SearchBook from './SearchBook'
import BookshelfList from './BookshelfList'
import * as BooksAPI from './BooksAPI';
import { Route, Link } from 'react-router-dom';

class BooksApp extends React.Component {
  shelfList = [{
    displayName: "Want to Read",
    apiName: "wantToRead"
  },
  {
    displayName: "Currently Reading",
    apiName: "currentlyReading"
  },
  {
    displayName: "Read",
    apiName: "read"
  }]

  state = {
    allBooks: [],
    showSearchPage: false
  }

  componentDidMount () {
    BooksAPI.getAll()
    .then((allBooks) => {
      this.setState(() => ({
        allBooks
      }))
    })
  }

  // loadBooks () {
  //   console.log("loading books")
  //   let bookList = [];
  //   BooksAPI.getAll()
  //     .then((results) => {
  //       console.log(results);
  //       bookList = results.map((r) => ({
  //         id: r.id,
  //         title: r.title,
  //         bookCover: r.imageLinks ? r.imageLinks.thumbnail : "",
  //         authors: r.authors,
  //         currentShelf: r.shelf
  //       }));
  //       this.setState(() => ({
  //         allBooks: results
  //       }))
  //       console.log("state books", this.state.allBooks);
  //     })
  // }

  handleShelfUpdated = (book, shelf) => {
    let apiCall = shelf;
    if(shelf === "none") {
      apiCall = " ";
    }
      BooksAPI.update(book, apiCall)
      .then((r) => {
        BooksAPI.getAll()
        .then((allBooks) => {
          this.setState(() => ({
            allBooks
          }))
        })
      });
  }

  render () {
    return (
      <div className="app">
        <section className="hero">
          <div className="hero-title">
            <h1>MyReads</h1>
          </div>
          <blockquote >
            “A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” – George R.R. Martin
                </blockquote>
        </section>
        <Route exact path="/search" render={({history}) => (
          <SearchBook
            shelfList={this.shelfList}
            onShelfChanged={this.handleShelfUpdated}
            onBackClicked={() => {
              history.push('/')
            }}
          />
        )} />
        <Route exact path="/" render={() => (
          <div>
            <BookshelfList
              shelfList={this.shelfList}
              allBooksList={this.state.allBooks}
              onShelfChanged={this.handleShelfUpdated}
            />
            <div className="open-search">
              <Link
                className='route'
                to='/search'>
                Show search page
               </Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
