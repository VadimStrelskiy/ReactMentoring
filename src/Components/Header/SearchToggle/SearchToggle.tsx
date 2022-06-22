import './SearchToggle.scss';
import {showMovieDetails, useAppDispatch} from '../../../Store/movieReducer';

export function SearchToggle() {
  const dispatch = useAppDispatch();
  function searchClicked(){
    dispatch(showMovieDetails(null));
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
