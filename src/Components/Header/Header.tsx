import {Search} from './Search/Search';
import './Header.scss';

export function Header() {
  return (
    <header>
      <img className='header-image'/>
      <p className='netflix-roulett-text'><strong>netflix</strong>roulette</p>
      <button className='add-movie'>+ ADD MOVIE</button>
      <p className='find-your-movie'>FIND YOUR MOVIE</p>
      <div className='search-container'>
        <Search/>
      </div>
    </header>
  );
}

