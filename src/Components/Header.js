import React from 'react';
import Search from './Search';

class Header extends React.Component {
    render() {
      return (
        <div className="page-header">
            <img className='header-image'/>
            <div id='hello-container'></div>
            <Search/>
        </div>
      )
    }
  }

  export default Header;
