import Search from './Search/Search';
import './Header.scss'

function Header() {
    return (
      <header>
          <img className='header-image'/>
          <p className='netflix-roulett-text'><b>netflix</b>roulette</p>
          <button className='add-movie'>+ ADD MOVIE</button>
          <p className='find-your-movie'>FIND YOUR MOVIE</p>
          <div className='search-container'>
            <Search/>
          </div>
      </header>
    )
  }

  export default Header;
