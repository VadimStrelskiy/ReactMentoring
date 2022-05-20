import React from 'react';

class GenreSelector extends React.Component {
    render() {
      return (
        <div className="genre-selector">
          <a>ALL</a>
          <a>DOCUMENTARY</a>
          <a>COMEDY</a>
          <a>HORROR</a>
          <a>CRIME</a>
        </div>
      )
    }
  }

  export default GenreSelector;
