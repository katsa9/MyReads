import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChangeShelf extends Component {
  state = {
    newShelf: this.props.selectedShelf
  }

  handleShelfSelected = (event) => {
    const { value } = event.target;
    this.setState({newShelf:value}, () => {
      this.props.onShelfSelected(value)
    })
  }

  render () {
    const {shelfList} = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={this.state.newShelf} 
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
}
export default ChangeShelf

