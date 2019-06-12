import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf';

class BookshelfList extends Component {

  render () {
    const { shelves, allBooksList } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div className="bookshelf-container">
            {shelves.map((shelf) => (
              <Bookshelf 
              key={shelf.apiName}
              shelfName={shelf.displayName}
              booksOnShelf={allBooksList.filter((book) => (
                book.currentShelf === shelf.apiName
              ))}
              shelfList={shelves}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PropTypes.propTypes = {
  shelves: PropTypes.array.isRequired,
  allBooksList: PropTypes.array.isRequired
}
export default BookshelfList