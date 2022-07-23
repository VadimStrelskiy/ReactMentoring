import styles from './DeleteModal.module.scss';
import {deleteMovie, getMovies, useAppDispatch} from '../../../Store/movieReducer';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';

interface DeleteModalProps{
  id: number,
  onClose: () => void
}

export function DeleteModal({id, onClose} : DeleteModalProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {searchQuery} = router.query;

  function onDelete() {
    dispatch(deleteMovie(id)).then(() => dispatch(getMovies({searchQuery: searchQuery as string, searchParams: stringify(router.query)})));
  }

  return (
    <div className={styles.deleteModal}>
      <button className={styles.deleteClose} onClick={onClose}>&times;</button>
      <h2>DELETE MOVIE</h2>
      <p>Are you sure you want to delete this movie?</p>
      <button className={styles.redButton} onClick={onDelete}>CONFIRM</button>
    </div>
  );
}

