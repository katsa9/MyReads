import React from 'react'
import './App.css'
import SearchBook from './SearchBook'
import BookshelfList from './BookshelfList'

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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
          <SearchBook />
        ) : (
            <div>
              <BookshelfList 
                shelves= {this.shelves}
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
