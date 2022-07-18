import './Search.scss';
import {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';
import Popup from 'reactjs-popup';
import {EditModal} from '../../Modals/EditModal/EditModal';

export function Search() {
  const {searchQuery} = useParams();
  const [searchParams] = useSearchParams();
  const [editOpen, setEditOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(searchQuery);
  const navigate = useNavigateMovie();

  useEffect(() => {
    setSearchValue(searchQuery);
    if (!searchQuery) {
      setSearchValue('');
    }
  }, [searchQuery]);

  function search(query) {
    navigate(query, searchParams);
  }

  return (
    <>
      <button className='add-movie' onClick={() => setEditOpen(true)}>+ ADD MOVIE</button>
      <p className='find-your-movie'>FIND YOUR MOVIE</p>
      <div className='search-container'>
        <input className='search-input' placeholder='What do you want to watch?' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button className='search-button' onClick={() => search(searchValue)}>SEARCH</button>
      </div>

      <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}>{<EditModal onClose={() => setEditOpen(false)} movie={null}/>}</Popup>
    </>
  );
}
