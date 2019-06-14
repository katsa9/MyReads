import React, { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'

class ChangeShelf extends Component {
  state = {
    newShelf: "none"
  }

  moveBook = (e) => {
    var shelf = e.target.value
    this.setState({ shelf: shelf }, () => {
      this.props.onChangeShelf(this.props.book, shelf)
    })
  }

  handleShelfSelected = (event) => {
    const {value } = event.target;
    this.setState({newShelf:value}, () => {
      this.props.onShelfSelected(this.props.associatedBook, value)
    })
  }

  render () {
    const {shelfList, selectedShelf} = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={selectedShelf} 
        onChange={this.handleShelfSelected}>
          <option value="move" disabled>Move to...</option>
          {shelfList.map((shelf) => (
            <option 
            key={shelf.apiName}
            value={shelf.apiName}>
            {shelf.displayName}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

PropTypes.propTypes = {
  shelfList: PropTypes.array.isRequired,
  selectedShelf:PropTypes.string.isRequired,
  onShelfSelected: PropTypes.func.isRequired,
  associatedBook: PropTypes.object.isRequired
}
export default ChangeShelf

