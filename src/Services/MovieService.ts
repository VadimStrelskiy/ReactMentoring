import {Movie} from '../Components/App';
import {SortOptionType} from '../Components/App';

const moviesData : Movie[] =[
  {
    id: 0,
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    image: 'PulpFiction.png',
    date: new Date(2004, 2, 3),
    url: 'PulpFiction.com',
    rating: 9.9,
    runtime: 121,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are outto retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  },
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biographt, Music',
    image: 'BohemianRhapsody.png',
    date: new Date(2003, 4, 12),
    url: 'BohemianRhapsody.com',
    rating: 8.0,
    runtime: 150,
    description: 'Bohemian Rhapsody DESCRIPTION',
  },
  {
    id: 2,
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning Movie',
    image: 'KillBill.png',
    date: new Date(1994, 5, 30),
    url: 'KillBill.com',
    rating: 7.6,
    runtime: 123,
    description: 'Kill Bill: Vol 2 DESCRIPTION',
  },
  {
    id: 3,
    title: 'Avengers: War of Infinity',
    genre: 'Action & Adventure',
    image: 'Avenger.png',
    date: new Date(2004, 8, 2),
    url: 'Avenger.com',
    rating: 3.1,
    runtime: 131,
    description: 'Avengers: War of Infinity DESCRIPTION',
  },
  {
    id: 4,
    title: 'Inception',
    genre: 'Action & Adventure',
    image: 'Inception.png',
    date: new Date(2003, 11, 7),
    url: 'Inception.com',
    rating: 7.6,
    runtime: 119,
    description: ' DESCRIPTION',
  },
  {
    id: 5,
    title: 'Reservoir dogs',
    genre: 'Oscar winning Movie',
    image: 'ReservoirDogs.png',
    date: new Date(1994, 3, 25),
    url: 'ReservoirDogs.com',
    rating: 7.9,
    runtime: 99,
    description: 'Reservoir dogs DESCRIPTION',
  },
];

export class MovieService {
  getMovies() : Movie[] {
    return moviesData;
  }

  sortMovies(moviesToSort: Movie[], sortOrder: SortOptionType) : Movie[] {
    let sortedMovies;
    switch (sortOrder) {
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
}
