import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types'

class SearchBook extends Component {
  state = {
    results: [],
    query: ""
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    BooksAPI.search(this.state.query)
    .then((results) => {
      this.setState(() => ({
        results: results.books
      }))
    })
    console.log(this.state.results);
  }

  updateQuery = event => {
    const { value } = event.target;
    console.log(event);
    this.setState(() => 
    ({query: value }))
  }

  render() {
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
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
    );
  }
}

PropTypes.propTypes = {
  onBackClicked: PropTypes.func.isRequired,
  onShelfChanged: PropTypes.func.isRequired,
  shelfList: PropTypes.array.isRequired
}
export default SearchBook