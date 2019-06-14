import React from 'react'
import './App.css'
import SearchBook from './SearchBook'
import BookshelfList from './BookshelfList'
import * as BooksAPI from './BooksAPI';

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
    this.loadBooks();
  }

  loadBooks () {
    let bookList = [];
    BooksAPI.getAll()
    //need to parse results and map to my book object - data in different format than expected
      .then((results) => {
        bookList = results.map((r) => ({
            id: r.id,
            title: r.title,
            bookCover: r.imageLinks ? r.imageLinks.thumbnail : "",
            author: r.authors[0],
            currentShelf: r.shelf
          }));
          console.log("bookslist", bookList);
          this.setState(() => ({
            allBooks: bookList
          }))
          console.log("state", this.state.allBooks);
        })
  }

    handleShelfUpdated = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(this.loadBooks());
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
          shelfList={this.shelfList}
          allBooksList={this.state.allBooks}
          onShelfChanged={this.handleShelfUpdated}
          />
        ) : (
            <div>
              <BookshelfList 
                shelfList= {this.shelfList}
                allBooksList={this.state.allBooks}
                onShelfChanged={this.handleShelfUpdated}
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
