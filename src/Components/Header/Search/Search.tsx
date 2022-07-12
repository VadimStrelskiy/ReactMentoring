import './Search.scss';
import {getMovies, useAppDispatch} from '../../../Store/movieReducer';
import {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import { useNavigateMovie } from '../../../Hooks/useNavigateMoive';
import Popup from 'reactjs-popup';
import {EditModal} from '../../Modals/EditModal/EditModal';

export function Search() {
  const dispatch = useAppDispatch();
  const {searchQuery} = useParams();
  const [editOpen, setEditOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(searchQuery);
  const navigate = useNavigateMovie();

  useEffect(() => {
    setSearchValue(searchQuery)
    dispatch(getMovies(searchQuery));
    if(!searchQuery){
      setSearchValue('');
    }
  }, [searchQuery]);

  function search(query){
    navigate(query);
  }

  return (
    <>
        <button className='add-movie' onClick={() => setEditOpen(true)}>+ ADD MOVIE</button>
        <p className='find-your-movie'>FIND YOUR MOVIE</p>
        <div className='search-container'>
          <input className='search-input' placeholder='What do you want to watch?' value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
          <button className='search-button' onClick={() => search(searchValue)}>SEARCH</button>
        </div>

        <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}>{<EditModal onClose={() => setEditOpen(false)} movie={null}/>}</Popup>
    </>
  );
}
