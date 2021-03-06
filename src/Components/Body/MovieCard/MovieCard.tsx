/* eslint-disable no-unused-vars */

import './MovieCard.scss';
import Popup from 'reactjs-popup';
import {useState} from 'react';
import {Movie} from '../../App';
import {DeleteModal} from '../../Modals/DeleteModal/DeleteModal';
import {EditModal} from '../../Modals/EditModal/EditModal';
import {ContextMenu, ContextMenuElement} from '../../Common/ContextMenu/ContextMenu';
import {useParams, useSearchParams} from 'react-router-dom';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';


interface MovieCardProps{
  movie: Movie,
}

export function MovieCard({movie}: MovieCardProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const {searchQuery} = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigateMovie();

  function movieClicked(id) {
    searchParams.set('movie', id);
    navigate(searchQuery, searchParams);
  }

  const elements : ContextMenuElement[] = [
    {
      label: 'Edit',
      onClick: () => setEditOpen(true),
    },
    {
      label: 'Delete',
      onClick: () => setDeleteOpen(true),
    },
  ];

  return (
    <div className='movie-card-container'>
      <img className='movie-image' src={movie.poster_path} onClick={() => movieClicked(movie.id)}/>
      <p className='movie-title'>{movie.title}</p>
      <p className='movie-year'>{new Date(movie.release_date).getFullYear()}</p>
      <p className='movie-genre'>{movie.genres.join(', ')}</p>
      <ContextMenu trigger={<svg className='movie-menu-button'>
        <circle fill="#2A202D" r="18px" cx="18px" cy="18px"/>
        <circle fill="white" r="2px" cx="18px" cy="10px"/>
        <circle fill="white" r="2px" cx="18px" cy="18px"/>
        <circle fill="white" r="2px" cx="18px" cy="26px"/>
      </svg>}
      elements = {elements}/>

      <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}><EditModal onClose={() => setEditOpen(false)} movie={movie}/></Popup>
      <Popup modal closeOnDocumentClick={false} open={deleteOpen} onClose={() => setDeleteOpen(false)}>{<DeleteModal onClose={() => setDeleteOpen(false)} id={movie.id}/>}</Popup>
    </div>
  );
}

