import styles from './Search.module.scss';
import {useEffect, useState} from 'react';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';
import Popup from 'reactjs-popup';
import {EditModal} from '../../Modals/EditModal/EditModal';
import {useRouter} from 'next/router';

export function Search() {
  const [editOpen, setEditOpen] = useState(false);
  const navigate = useNavigateMovie();
  const router = useRouter();
  const {searchQuery} = router.query;
  const [searchValue, setSearchValue] = useState(searchQuery);

  useEffect(() => {
    setSearchValue(searchQuery);
    if (!searchQuery) {
      setSearchValue('');
    }
  }, [searchQuery]);

  function search(query) {
    navigate(query, router.query);
  }

  return (
    <>
      <button className={styles.addMovie} onClick={() => setEditOpen(true)}>+ ADD MOVIE</button>
      <p className={styles.findYourMovie}>FIND YOUR MOVIE</p>
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} placeholder='What do you want to watch?' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button className={styles.searchButton} onClick={() => search(searchValue)}>SEARCH</button>
      </div>

      <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}>{<EditModal onClose={() => setEditOpen(false)} movie={null}/>}</Popup>
    </>
  );
}
