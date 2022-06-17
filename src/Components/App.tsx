import {Header} from './Header/Header';
import {Body} from './Body/Body';
import {Footer} from './Footer/Footer';
import {useEffect, useState, createContext} from 'react';
import {useToggle} from '../Hooks/useToggle';
import {MovieService} from '../Services/MovieService';
import './App.scss';

export interface Movie {
  id: number,
  image: string,
  title: string,
  genre: string,
  date: Date,
  url: string,
  rating: number,
  runtime: number,
  description: string
}

export const enum SortOptionType {
  ReleaseDateAsc,
  ReleaseDateDesc,
  TitleAsc,
  TitleDesc
};

export interface MoviesListProps{
  movies: Movie[],
  onDelete: (number) => void,
  sortMoviesHandler: (option: SortOptionType) => void
}

export const Context = createContext(null);

export function App() {
  const [isInSearchMode, toggleIsInSearchMode] = useToggle(true);
  const [movieDetail, setMovieDetail] = useState(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  const movieService = new MovieService();

  function onDelete(id:number) {
    const newMovies = [...movies];
    newMovies.forEach( (item, index) => {
      if (item.id === id) newMovies.splice(index, 1);
    });

    setMovies(newMovies);
  }

  useEffect(() => {
    setMovies(movieService.getMovies());
  }, []);

  function sortMoviesHandler(sortOrder: SortOptionType) {
    setMovies(movieService.sortMovies(movies, sortOrder));
  }

  function activateMovieDetail(movie : Movie) {
    setMovieDetail(movie);
    if(isInSearchMode){
      toggleIsInSearchMode();
    }
    window.scrollTo(0, 0);
  }

  return (
    <div className='app-container'>
      <Context.Provider value={
        {
          movie: movieDetail,
          movieClicked: activateMovieDetail,
          searchClicked: toggleIsInSearchMode,
          isInSearchMode: isInSearchMode,
        }}>
        <Header/>
        <Body movies={movies} onDelete={onDelete} sortMoviesHandler={sortMoviesHandler}/>
      </Context.Provider>

      <Footer>
        <p className='netflix-roulett-text'><b>netflix</b>roulette</p>
      </Footer>
    </div>
  );
}
