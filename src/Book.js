import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf';

class Book extends Component {

  onShelfSelected = (value) => {
    this.props.onShelfChanged(this.props.bookData, value);
  }

  render () {
    const { shelfList} = this.props;
    const { id, imageLinks, title, authors, shelf } = this.props.bookData;
    const authorString = authors ? authors.join(" & ") : "";
    return (
      <li key={id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              <img src={imageLinks ? imageLinks.thumbnail : ""} alt={title}
                width="128"
                height="193">
              </img>
            </div>
            {<ChangeShelf
              shelfList={shelfList}
              selectedShelf={shelf}
              onShelfSelected={this.onShelfSelected}
            />}
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
           {authorString}
          </div>
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