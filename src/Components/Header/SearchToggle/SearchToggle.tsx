import './SearchToggle.scss';
import {useParams, useSearchParams} from 'react-router-dom';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';

export function SearchToggle() {
  const {searchQuery} = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigateMovie();

  function searchClicked() {
    searchParams.delete('movie');
    navigate(searchQuery, searchParams);
  }

  return (
    <button className='search-toggle' onClick={searchClicked}>
      <svg>
        <circle cx="18" cy="11" r="10" fill="transparent" stroke ="#F65261" strokeWidth="3"/>
        <line x1="0" y1="30" x2="11" y2="19" stroke="#F65261" strokeWidth="3"/>
      </svg>
    </button>
  );
}
