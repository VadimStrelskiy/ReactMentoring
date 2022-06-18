import {Movie} from '../Components/App';
import {SortOptionType} from '../Components/App';

export function getMoviesApi<Movie>(): Promise<Movie> {
  return fetch('http://localhost:4000/movies')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
}
