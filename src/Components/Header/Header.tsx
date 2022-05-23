import Search from './Search/Search';
import './Header.scss'

function Header() {
    return (
      <header>
          <img className='header-image'/>
          <div className='search-container'>
            <Search/>
      </header>
    )
  }

  export default Header;
