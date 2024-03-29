/* eslint-disable no-unused-vars */

import styles from './MovieCard.module.scss';
import Popup from 'reactjs-popup';
import {useState} from 'react';
import {Movie} from '../../App';
import {DeleteModal} from '../../Modals/DeleteModal/DeleteModal';
import {EditModal} from '../../Modals/EditModal/EditModal';
import {ContextMenu, ContextMenuElement} from '../../Common/ContextMenu/ContextMenu';
import {useRouter} from 'next/router';
import {stringUtil} from '../../../Utils/stringUtil';


interface MovieCardProps{
  movie: Movie,
}

export function MovieCard({movie}: MovieCardProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const router = useRouter();
  const {searchQuery} = router.query;

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

  function getMovieLink(id) {
    const queryPart = searchQuery ? ('/' + searchQuery) : '';
    return '/search' + queryPart + '?' + stringUtil.createQueryParamString(router.query, id, false);
  }

  return (
    <div className={styles.movieCardContainer}>
      <a href={getMovieLink(movie.id)}><img className={styles.movieImage} src={movie.poster_path} /></a>
      <p className={styles.movieTitle}>{movie.title}</p>
      <p className={styles.movieYear}>{new Date(movie.release_date).getFullYear()}</p>
      <p className={styles.movieGenre}>{movie.genres.join(', ')}</p>
      <ContextMenu trigger={<svg className={styles.movieMenuButton}>
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

