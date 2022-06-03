import {useEffect, useState} from "react";
import {GenreSelector} from './GenreSelector/GenreSelector';
import {SortOption, SortPanel, SortOptionType} from './SortPanel/SortPanel';
import {MoviesList} from './MoviesList/MoviesList';
import {ErrorBoundary} from './ErrorBoundary/ErrorBoundary';
import './Body.scss';

const MOVIE_COUNT = 39;

export interface Movie {
  image: string,
  title: string,
  genre: string,
  year: number,
}

const moviesData : Movie[] =[
  {
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    image: 'PulpFiction.png',
    year: 2004
  },
  {
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biographt, Music',
    image: 'BohemianRhapsody.png',
    year: 2003
  },
  {
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning Movie',
    image: 'KillBill.png',
    year: 1994
  },
  {
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    image: 'Avenger.png',
    year: 2004
  },
  {
    title: 'Inception',
    genre: 'Action & Adventure',
    image: 'Inception.png',
    year: 2003
  },
  {
    title: 'Reservoir dogs',
    genre: 'Oscar winning Movie',
    image: 'ReservoirDogs.png',
    year: 1994
  },
]

export function Body() {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMovies(sortMovies(moviesData, 0));
    }, 1000);
  }, []);

  function sortMoviesHandler(sortOrder: SortOptionType){
    setMovies(sortMovies(movies, sortOrder));
  }

  function sortMovies(moviesToSort: Movie[], sortOrder: SortOptionType) : Movie[] {

    let sortedMovies;
    switch(sortOrder){
      case SortOptionType.ReleaseDateAsc:
        sortedMovies = [...moviesToSort].sort((a, b) => a.year < b.year ? -1 : 1);
        break;
      case SortOptionType.ReleaseDateDesc:
        sortedMovies = [...moviesToSort].sort((a, b) => a.year > b.year ? -1 : 1);
        break;
      case SortOptionType.TitleAsc:
        sortedMovies = [...moviesToSort].sort((a, b) => a.title < b.title ? -1 : 1);
        break;
      case SortOptionType.TitleDesc:
        sortedMovies = [...moviesToSort].sort((a, b) => a.title > b.title ? -1 : 1);
        break;
    }

    return sortedMovies;
  }

  return (
    <main className="page-body">
      <ErrorBoundary>
        <GenreSelector/>
        <SortPanel onValueChanged={sortMoviesHandler}/>
        <hr/>
        <p className='movie-count'>{MOVIE_COUNT} movies found</p>
        <MoviesList movies={movies}/>
      </ErrorBoundary>
    </main>
  );
}
