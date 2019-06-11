import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  render () {
    const {booksOnShelf, shelfName} = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelfName }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelf.map((book) => (
              <Book 
              bookData={book}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

PropTypes.propTypes = {
  booksOnShelf: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
  onShelfChanged: PropTypes.func.isRequired
}
export default Bookshelf