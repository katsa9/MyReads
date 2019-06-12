import React from 'react'
import './App.css'
import SearchBook from './SearchBook'
import BookshelfList from './BookshelfList'
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  shelves = [{
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
    console.log(this.state.allBooks);
  }

  handleShelfUpdated = (book, shelf) => {
    //call api update 
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
        {this.state.showSearchPage ? (
          <SearchBook 
          shelves={this.shelves}
          allBooksList={this.state.allBooks}
          />
        ) : (
            <div>
              <BookshelfList 
              shelves= {this.shelves}
                allBooksList={this.state.allBooks}
              />
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
