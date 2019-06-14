import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf';

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [], //these are my book objects
      query: ""
    }
    this.bookToShelfMap = {};
    this.props.allBooksList.map((item) => (
      this.bookToShelfMap[item.id] = item.currentShelf
    ));
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    if (this.state.query === "") {
      this.setState((currState) => ({
        searchResults: []
      }))
    } else {
      BooksAPI.search(this.state.query)
        .then((results) => {
          if (results.error === "empty query") {
            this.setState((currState) => ({
              searchResults: []
            }))
          } else {
            let newArray = Object.values(results).map((item) => {
              let shelf = "none";
              if (this.bookToShelfMap[item.id]) {
                shelf = this.bookToShelfMap[item.id];
              }
              return ({
                id: item.id,
                title: item.title,
                bookCover: item.imageLinks ? item.imageLinks.thumbnail : "",
                author: item.authors ? item.authors[0] : "No author info",
                currentShelf: shelf
              })
            })
            console.log(newArray);
            this.setState((currState) => ({
              searchResults: newArray
            }))
          }
        })
    }
  }

  updateQuery = event => {
    const { value } = event.target;
    this.setState(() =>
      ({ query: value }))
  }

  render () {
    const { onShelfChanged, shelfList } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <form onSubmit={this.onSearchSubmit}>
              <input type="text" placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.updateQuery}
              />
            </form>
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
  allBooksList: PropTypes.array.isRequired,
  onBackClicked: PropTypes.func.isRequired,
  onShelfChanged: PropTypes.func.isRequired,
  shelfList: PropTypes.array.isRequired
}
export default SearchBook