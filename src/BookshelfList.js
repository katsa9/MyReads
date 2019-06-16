import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf';

class BookshelfList extends Component {

  render () {
    const { shelfList, allBooksList ,onShelfChanged} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div className="bookshelf-container">
            {shelfList.map((shelf) => (
              <Bookshelf 
              key={shelf.apiName}
              shelfName={shelf.displayName}
              booksOnShelf={allBooksList.filter((book) => (
                book.shelf === shelf.apiName
              ))}
              shelfList={shelfList}
              onShelfChanged={onShelfChanged}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PropTypes.propTypes = {
  shelfList: PropTypes.array.isRequired,
  allBooksList: PropTypes.array.isRequired,
  onShelfChanged: PropTypes.func.isRequired
}
export default BookshelfList