import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom'

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [], //these are my book objects
      query: ""
    }
    this.findShelf = this.findShelf.bind(this);
  }

  componentDidMount () {
  }

  findShelf = (bookId) => {
    let found = this.props.booksList.filter(book => book.id === bookId);
    if(found.length !== 0) {
      return found.shelf;
    }
    return "none";
  }

  updateQuery = event => {
    const { value } = event.target;
    let newArray = [];
    BooksAPI.search(value)
      .then((results) => {
        if(!results || results.error || results.length === 0) {
          this.setState((currState) => ({
            searchResults: newArray
          }))
        }else {
          // this.setState((currState) => ({
          //     searchResults: results.forEach((item) => {
          //       item.shelf = this.findShelf(item.id);
          //     })
          //   }))
          newArray = Object.values(results).map((item) => {
            let shelf = this.findShelf(item.id);
            return ({
              id: item.id,
              title: item.title,
              imageLinks: item.imageLinks,
              authors: item.authors,
              shelf: shelf
            })
          })
          this.setState((currState) => ({
            searchResults: newArray
          }))
        } 
      })
      this.setState(() =>
      ({ query: value }))
  }

  render () {
    const { onShelfChanged, shelfList } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className='close-search'
            to='/'>
            Close
        </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <div className="list-books">
          <div className="list-books-content">
            <div className="bookshelf-container">
              {this.state.searchResults.length !== 0
                ? (<Bookshelf
                  shelfName={"Results"}
                  booksOnShelf={this.state.searchResults}
                  shelfList={shelfList}
                  onShelfChanged={onShelfChanged}
                />)
                : (<p>No Results to Display</p>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PropTypes.propTypes = {
  onBackClicked: PropTypes.func.isRequired,
  onShelfChanged: PropTypes.func.isRequired,
  shelfList: PropTypes.array.isRequired,
  booksList: PropTypes.array.isRequired

}
export default SearchBook