import React from 'react';
import GenreSelector from './GenreSelector';
import Counter from './Counter';

class Body extends React.Component {
    render() {
      return (
        <div className="page-body">
          <GenreSelector/>
          <Counter/>
        </div>
      )
    }
  }

  export default Body;
