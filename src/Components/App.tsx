import {Header} from './Header/Header';
import {Body} from './Body/Body';
import {Footer} from './Footer/Footer';
import {useEffect, useState} from 'react';
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

export function App() {
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

  return (
    <div className='app-container'>
      <Header/>
      <Body movies={movies} onDelete={onDelete} sortMoviesHandler={sortMoviesHandler}/>
      <Footer>
        <p className='netflix-roulett-text'><b>netflix</b>roulette</p>
      </Footer>
    </div>
  );
}
