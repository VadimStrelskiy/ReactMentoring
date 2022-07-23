import styles from './SearchToggle.module.scss';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';
import { useRouter } from 'next/router'

export function SearchToggle() {
  const router = useRouter();
  const {searchQuery} = router.query;
  const navigate = useNavigateMovie();

  function searchClicked() {
    router.query.movie = null;
    navigate(searchQuery as string, router.query);
  }

  return (
    <button className={styles.searchToggle} onClick={searchClicked}>
      <svg>
        <circle cx="18" cy="11" r="10" fill="transparent" stroke ="#F65261" strokeWidth="3"/>
        <line x1="0" y1="30" x2="11" y2="19" stroke="#F65261" strokeWidth="3"/>
      </svg>
    </button>
  );
}
