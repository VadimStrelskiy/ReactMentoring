import {Header} from './Header/Header';
import {Body} from './Body/Body';
import {Footer} from './Footer/Footer';
import {useEffect, useState, createContext} from 'react';
import {useToggle} from '../Hooks/useToggle';
import './App.scss';

export interface Movie {
  id: number,
  poster_path: string,
  title: string,
  //tagline: string,
  release_date: Date,
  vote_average: number,
  runtime: number,
  overview: string,
  genres: string[],

}

export const enum SortOptionType {
  ReleaseDateAsc,
  ReleaseDateDesc,
  TitleAsc,
  TitleDesc
};

export const test = 1;

export interface MoviesListProps{
  onDelete: (number) => void,
  sortMoviesHandler: (option: SortOptionType) => void
}

export const Context = createContext(null);

export function App() {
  const [isInSearchMode, toggleIsInSearchMode] = useToggle(true);
  const [movieDetail, setMovieDetail] = useState(null);
  const [movies, setMovies] = useState<Movie[]>([]);


  function onDelete(id:number) {
    const newMovies = [...movies];
    newMovies.forEach( (item, index) => {
      if (item.id === id) newMovies.splice(index, 1);
    });

    setMovies(newMovies);
  }



  function sortMoviesHandler(sortOrder: SortOptionType) {
    //setMovies(movieService.sortMovies(movies, sortOrder));
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
        <Body onDelete={onDelete} sortMoviesHandler={sortMoviesHandler}/>
      </Context.Provider>

      <Footer>
        <p className='netflix-roulett-text'><b>netflix</b>roulette</p>
      </Footer>
    </div>
  );
}
