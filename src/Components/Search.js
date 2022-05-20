import React from 'react';

class Search extends React.PureComponent {
    render() {
      return (
        <div className="search">
            <div className="search-input-container">
                <label>What do you want to watch?</label>
                <input className="search-input" />
            </div>
            
            <button className="search-button">
                <label>SEARCH</label>
            </button>
        </div>
      )
    }
  }

  export default Search;
