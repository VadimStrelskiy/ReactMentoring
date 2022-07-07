import './Search.scss';
import {getMovies, useAppDispatch} from '../../../Store/movieReducer';
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

export function Search() {
  const dispatch = useAppDispatch();
  const {searchQuery} = useParams();
  const [editOpen, setEditOpen] = useState(false);
  
  useEffect(() => {
    search();
  });

  function search(){
    dispatch(getMovies(searchQuery));
  }

  return (
    <>
      <button className='add-movie' onClick={() => setEditOpen(true)}>+ ADD MOVIE</button>
        <p className='find-your-movie'>FIND YOUR MOVIE</p>
        <div className='search-container'>
          <input className='search-input' placeholder='What do you want to watch?' value={searchQuery ? searchQuery : ''}/>
          <button className='search-button' onClick={search}>SEARCH</button>
        </div>
    </>
  );
}
