import React, { Component } from 'react';
import './SearchBox.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/>
        <input
          placeholder="Search term"
          value={this.props.searchTerm}
          onChange={e => this.props.handleUpdate(e.target.value)}/>
      </div>   
    );
  }
}

export default SearchBox;

// note to install fontawsome icons referenced above not working thinking in ract about 30% down: 
// $ npm install @fortawesome/fontawesome-svg-core
// $ npm install @fortawesome/free-solid-svg-icons
// $ npm install @fortawesome/react-fontawesome