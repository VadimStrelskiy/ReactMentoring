import {Search} from './Search/Search';
import {SearchToggle} from './SearchToggle/SearchToggle';
import {MovieDetails} from './MovieDetails/MovieDetails';
import {getMovie, getMovies, useAppDispatch, useAppSelector} from '../../Store/movieReducer';
import './Header.scss';
import {useSearchParams, useParams} from 'react-router-dom';
import {useEffect} from 'react';

export function Header() {
  const movie = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  const {searchQuery} = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getMovies({searchQuery: searchQuery, searchParams: searchParams.toString()}));
  }, [searchQuery, searchParams]);

  const movieId = searchParams.get('movie');

  if (movieId && (!movie || movie.id.toString() != movieId)) {
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
    </header>
  );
}

