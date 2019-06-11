import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf';

class Book extends Component {

  state = {
    // book: {
    //   id: "",
    //   title: "",
    //   bookCover:"",
    //   author: ""
    // },

    //add additional features like rating/publisher
    //maybe something that expands with more info 
    currentShelf: {}
  }

  render () {
    const { id, bookCover, title, author } = this.props.bookData;
    const {shelfList} = this.props;
    return (
      <li id={id}>
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
            />}
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    );
  }
}

PropTypes.propTypes = {
  shelfList: PropTypes.array.isRequired,
  bookData: PropTypes.object.isRequired,
  onShelfChanged: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired
}
export default Book