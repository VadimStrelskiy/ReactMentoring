import {Search} from './Search/Search';
import {SearchToggle} from './SearchToggle/SearchToggle';
import {MovieDetails} from './MovieDetails/MovieDetails';
import {getMovie, useAppDispatch, useAppSelector} from '../../Store/movieReducer';
import './Header.scss';
import {useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import Popup from 'reactjs-popup';
import {EditModal} from '../Modals/EditModal/EditModal';

export function Header() {
  const [editOpen, setEditOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const movie = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();

  const movieId = searchParams.get('movie');

  if(movieId && (!movie || movie.id.toString() != movieId)){
    dispatch(getMovie(movieId));
  }
  
  return (
    <header>
      <p className='netflix-roulett-text'><strong>netflix</strong>roulette</p>

      {movie == null || !movieId ?
        (<Search/>) :
        (<>
          <SearchToggle/>
          <br/>
          <MovieDetails movie={movie}/>
        </>)
      }

      <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}>{<EditModal onClose={() => setEditOpen(false)} movie={null}/>}</Popup>
    </header>
  );
}

