import {Search} from './Search/Search';
import './Header.scss';
import {useState} from 'react';
import Popup from 'reactjs-popup';
import {EditModal} from '../Modals/EditModal/EditModal';

export function Header() {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <header>
      <p className='netflix-roulett-text'><strong>netflix</strong>roulette</p>
      <button className='add-movie' onClick={() => setEditOpen(true)}>+ ADD MOVIE</button>
      <p className='find-your-movie'>FIND YOUR MOVIE</p>
      <div className='search-container'>
        <Search/>
      </div>

      <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}>{<EditModal onClose={() => setEditOpen(false)} movie={null}/>}</Popup>
    </header>
  );
}

