import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf';

class SearchBook extends Component {
  state = {
    searchResults: [], //these are my book objects
    query: ""
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    BooksAPI.search(this.state.query)
      .then((results) => {

        let newArray = Object.values(results).map((item) => (
          {
            id: item.id,
            title: item.title,
            bookCover: item.imageLinks ? item.imageLinks.thumbnail : "",
            author: item.authors[0]
          }))
        console.log(newArray);
        this.setState((currState) => ({
          //map results to my book object
          //need to cater for more than one author
          searchResults: [...this.state.searchResults, ...newArray]
        }))
        console.log("My obj", this.state.searchResults);
      })

  }

  updateQuery = event => {
    const { value } = event.target;
    console.log(event);
    this.setState(() =>
      ({ query: value }))
  }

  render () {
    const { shelfList } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
              <Bookshelf
                shelfName={"Results"}
                booksOnShelf={this.state.searchResults}
                shelfList={shelfList}
              />
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