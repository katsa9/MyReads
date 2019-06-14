import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf';

class Book extends Component {
  render () {
    const { shelfList, bookData, onShelfChanged} = this.props;
    const { id, bookCover, title, author,currentShelf } = this.props.bookData;
    return (
      <li key={id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              <img src={bookCover} alt={title}
                width="128"
                height="193">
              </img>
            </div>
            {<ChangeShelf
              shelfList={shelfList}
              selectedShelf={currentShelf}
              onShelfSelected={onShelfChanged}
              associatedBook={bookData}
            />}
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }
};

PropTypes.propTypes = {
  shelfList: PropTypes.array.isRequired,
  bookData: PropTypes.object.isRequired,
  onShelfChanged: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired
}
export default Book