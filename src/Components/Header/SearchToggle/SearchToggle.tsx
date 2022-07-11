import './SearchToggle.scss';
import {useNavigate, useParams} from "react-router-dom";

export function SearchToggle() {
  const navigate = useNavigate();
  const {searchQuery} = useParams();
  
  function searchClicked() {
    navigate('/search' + (searchQuery ? ('/' + searchQuery) : ''));
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
