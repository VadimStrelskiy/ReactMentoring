import Search from './Search';

function Header() {
    return (
      <div className="page-header">
          <img className='header-image'/>
          <div id='hello-container'></div>
          <Search/>
      </div>
    )
  }

  export default Header;
