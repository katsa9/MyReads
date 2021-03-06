import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  render () {
    const {booksOnShelf, shelfName, shelfList, onShelfChanged} = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelfName }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelf.map((book) => (
              <Book 
              key={book.id}
              bookData={book}
              shelfList={shelfList}
              onShelfChanged={onShelfChanged}
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
  shelfList: PropTypes.array.isRequired,
  onShelfChanged: PropTypes.func.isRequired
}
export default Bookshelf