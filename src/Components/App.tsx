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
  date: Date,
  url: string,
  rating: number,
  runtime: number,
  description: string
}

export interface MoviesListProps{
  movies: Movie[],
  onDelete: (number) => void,
  sortMoviesHandler: (option: SortOptionType) => void
}

const moviesData : Movie[] =[
  {
    id : 0,
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    image: 'PulpFiction.png',
    date: new Date(2004, 2, 3),
    url: 'PulpFiction.com',
    rating: 9.9,
    runtime: 120,
    description: 'Pulp Fiction DESCRIPTION'
  },
  {
    id : 1,
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biographt, Music',
    image: 'BohemianRhapsody.png',
    date: new Date(2003, 4, 12),
    url: 'BohemianRhapsody.com',
    rating: 8.0,
    runtime: 150,
    description: 'Bohemian Rhapsody DESCRIPTION'
  },
  {
    id : 2,
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning Movie',
    image: 'KillBill.png',
    date: new Date(1994, 5, 30),
    url: 'KillBill.com',
    rating: 7.6,
    runtime: 123,
    description: 'Kill Bill: Vol 2 DESCRIPTION'
  },
  {
    id : 3,
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    image: 'Avenger.png',
    date: new Date(2004, 8, 2),
    url: 'Avenger.com',
    rating: 3.1,
    runtime: 131,
    description: 'Avengers: War of Infinity DESCRIPTION'
  },
  {
    id : 4,
    title: 'Inception',
    genre: 'Action & Adventure',
    image: 'Inception.png',
    date: new Date(2003, 11, 7),
    url: 'Inception.com',
    rating: 7.6,
    runtime: 119,
    description: ' DESCRIPTION'
  },
  {
    id : 5,
    title: 'Reservoir dogs',
    genre: 'Oscar winning Movie',
    image: 'ReservoirDogs.png',
    date: new Date(1994, 3, 25),
    url: 'ReservoirDogs.com',
    rating: 7.9,
    runtime: 99,
    description: 'Reservoir dogs DESCRIPTION'
  },
]

export function App() {

  const [movies, setMovies] = useState<Movie[]>([]);

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
        sortedMovies = [...moviesToSort].sort((a, b) => a.date < b.date ? -1 : 1);
        break;
      case SortOptionType.ReleaseDateDesc:
        sortedMovies = [...moviesToSort].sort((a, b) => a.date > b.date ? -1 : 1);
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
      <Body movies={movies} onDelete={onDelete} sortMoviesHandler={sortMoviesHandler}/>
      <Footer>
        <p className='netflix-roulett-text'><b>netflix</b>roulette</p>
      </Footer>
    </div>
  );
}
