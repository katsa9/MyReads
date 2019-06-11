import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  state = {
    // book: {
    //   id: "",
    //   title: "",
    //   bookCover:"",
    //   author: ""
    // },
    currentShelf: {}
  }

  render () {
    const { id, bookCover, title, author } = this.props.bookData;
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
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}}</div>
          <div className="book-authors">{author}}</div>
        </div>
      </li>
    );
  }
}

PropTypes.propTypes = {
  bookData: PropTypes.object.isRequired,
  onShelfChanged: PropTypes.func.isRequired
}
export default Book