import './Search.scss';
import {getMovies, useAppDispatch} from '../../../Store/movieReducer';
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";

export function Search() {
  const dispatch = useAppDispatch();
  const {searchQuery} = useParams();
  const [editOpen, setEditOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(searchQuery);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchValue(searchQuery)
    dispatch(getMovies(searchQuery));
  }, [searchQuery]);

  function search(query){
    navigate('/search' + (query ? '/' + query : ''));
  }

  return (
    <>
      <button className='add-movie' onClick={() => setEditOpen(true)}>+ ADD MOVIE</button>
        <p className='find-your-movie'>FIND YOUR MOVIE</p>
        <div className='search-container'>
          <input className='search-input' placeholder='What do you want to watch?' value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
          <button className='search-button' onClick={() => search(searchValue)}>SEARCH</button>
        </div>
    </>
  );
}
