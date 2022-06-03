import {MovieCard, Movie} from '../MovieCard/MovieCard';

const movies : Movie[] =[
  {
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    image: 'PulpFiction.png',
    year: 2004,
  },
  {
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biographt, Music',
    image: 'BohemianRhapsody.png',
    year: 2003,
  },
  {
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning Movie',
    image: 'PulpFiction.png',
    year: 1994,
  },
  {
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    image: 'Avenger.png',
    year: 2004,
  },
  {
    title: 'Inception',
    genre: 'Action & Adventure',
    image: 'Inception.png',
    year: 2003,
  },
  {
    title: 'Reservoir dogs',
    genre: 'Oscar winning Movie',
    image: 'ReservoirDogs.png',
    year: 1994,
  },
];


export function MoviesList() {
  return (
    <>
      {
        movies.map((movie) =>
          (
            <MovieCard key={movie.title} {...movie}/>
          ),
        )}
    </>);
}

