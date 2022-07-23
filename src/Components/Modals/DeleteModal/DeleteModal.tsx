import styles from './DeleteModal.module.scss';
import {deleteMovie, getMovies, useAppDispatch} from '../../../Store/movieReducer';
import { useRouter } from 'next/router';

interface DeleteModalProps{
  id: number,
  onClose: () => void
}

export function DeleteModal({id, onClose} : DeleteModalProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {searchQuery} = router.query;

  function onDelete() {
    dispatch(deleteMovie(id)).then(() => dispatch(getMovies({searchQuery: searchQuery, searchParams: searchParams.toString()})));
  }

  return (
    <div className="delete-modal">
      <button className='delete-close' onClick={onClose}>&times;</button>
      <h2>DELETE MOVIE</h2>
      <p>Are you sure you want to delete this movie?</p>
      <button className='red-button' onClick={onDelete}>CONFIRM</button>
    </div>
  );
}

