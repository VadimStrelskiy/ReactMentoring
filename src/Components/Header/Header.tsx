import {Search} from './Search/Search';
import {SearchToggle} from './SearchToggle/SearchToggle';
import {MovieDetails} from './MovieDetails/MovieDetails';
import './Header.scss';
import {useState, useContext} from 'react';
import Popup from 'reactjs-popup';
import {EditModal} from '../Modals/EditModal/EditModal';
import {Context} from '../App';

export function Header() {
  const [editOpen, setEditOpen] = useState(false);

  const isInSearchMode = useContext(Context).isInSearchMode;

  return (
    <header>
      <p className='netflix-roulett-text'><strong>netflix</strong>roulette</p>
      
      {isInSearchMode ?
        (
          <>
            <button className='add-movie' onClick={() => setEditOpen(true)}>+ ADD MOVIE</button>
            <p className='find-your-movie'>FIND YOUR MOVIE</p>
            <div className='search-container'>
              <Search/>
            </div>
          </> ) :
          (<>
            <SearchToggle/>
            <br/>
            <MovieDetails/>
          </>)
      }

      <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}>{<EditModal onClose={() => setEditOpen(false)} movie={null}/>}</Popup>
    </header>
  );
}

