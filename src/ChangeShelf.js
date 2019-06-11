import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChangeShelf extends Component {
  state = {
    newShelf: "none"
  }

  render () {
    const {shelfList} = this.props;
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          {shelfList.map((shelf) => (
            <option value={shelf.apiName}>{shelf.displayName}</option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

PropTypes.propTypes = {
  shelfList: PropTypes.array.isRequired
}
export default ChangeShelf

