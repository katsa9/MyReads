import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf';

class BookshelfList extends Component {


  state = {
    allBooks: []
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
    const { shelves } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div className="bookshelf-container">
            {shelves.map((shelf) => (
              <Bookshelf 
              shelfName={shelf.displayName}
              booksOnShelf={this.state.allBooks.filter((book) => (
                book.currentShelf === shelf.apiName
              ))}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PropTypes.propTypes = {
  shelves: PropTypes.array.isRequired
}
export default BookshelfList