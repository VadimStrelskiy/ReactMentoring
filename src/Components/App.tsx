import {Header} from './Header/Header';
import {Body} from './Body/Body';
import {Footer} from './Footer/Footer';
import {useEffect, useState} from "react";
import {SortOptionType} from './Body/SortPanel/SortPanel';
import './App.scss';

export interface Movie {
  id: number,
  image: string,
  title: string,
  genre: string,
  year: number,
}

export interface MoviesListProps{
  movies: Movie[],
  onEdit: (number) => void,
  onDelete: (number) => void,
  sortMoviesHandler: (option: SortOptionType) => void
}

const moviesData : Movie[] =[
  {
    id : 0,
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    image: 'PulpFiction.png',
    year: 2004
  },
  {
    id : 1,
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biographt, Music',
    image: 'BohemianRhapsody.png',
    year: 2003
  },
  {
    id : 2,
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning Movie',
    image: 'KillBill.png',
    year: 1994
  },
  {
    id : 3,
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    image: 'Avenger.png',
    year: 2004
  },
  {
    id : 4,
    title: 'Inception',
    genre: 'Action & Adventure',
    image: 'Inception.png',
    year: 2003
  },
  {
    id : 5,
    title: 'Reservoir dogs',
    genre: 'Oscar winning Movie',
    image: 'ReservoirDogs.png',
    year: 1994
  },
]

export function App() {

  const [movies, setMovies] = useState<Movie[]>([]);

  function onEdit(id:number){
  }

  function onDelete(id:number){
    const newMovies = [...movies];
    newMovies.forEach( (item, index) => {
      if(item.id === id) newMovies.splice(index, 1);
    });

    setMovies(newMovies);
  }

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
    <div className='app-container'>
      <Header/>
      <Body movies={movies} onDelete={onDelete} onEdit={onEdit} sortMoviesHandler={sortMoviesHandler}/>
      <Footer>
        <p className='netflix-roulett-text'><b>netflix</b>roulette</p>
      </Footer>
    </div>
  );
}
