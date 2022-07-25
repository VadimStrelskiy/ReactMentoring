import {Movie} from '../Components/App';
import axios from 'axios';

const baseUrl = 'http://localhost:4000/movies';

export async function getMoviesApi(searchQuery : string, searchParams : string) : Promise<Movie[]> {
  return await handleError(async () =>{
    let url = baseUrl;

    if (searchQuery) {
      url += '?searchBy=title&search=' + searchQuery;
    }

    if (searchParams) {
      url += searchQuery ? '&' : '?';
      url += searchParams;
    }

    const response = await axios.get(url);

    if (response.statusText == 'OK') {
      return response.data.data;
    }

    throw new Error(response.statusText ? response.statusText : response.data);
  });
}

export async function getMovieApi(id : string) : Promise<Movie> {
  return await handleError(async () =>{
    const url = baseUrl + '/' + id;
    const response = await axios.get(url);
    if (response.statusText == 'OK') {
      return response.data;
    }

    throw new Error(response.statusText ? response.statusText : response.data);
  });
}

export async function deleteMovieApi(id : number) {
  return await handleError(async () => {
    const url = baseUrl + '/' + id;
    const response = await axios.delete(url);
    if (response.statusText == 'OK') {
      return;
    }

    throw new Error(response.statusText);
  });
};

export async function createOrUpdateMovieApi(movie : Movie) {
  return await handleError(async () => {
    if (movie.id <= 0) {
      movie.id = undefined;
    }

    let response;
    if (movie.id > 0) {
      response = await axios.put(baseUrl, movie);
    } else {
      response = await axios.post(baseUrl, movie);
    }

    if (response.statusText == 'OK') {
      return;
    }

    const messages = response.data.messages;

    throw new Error(messages.join('\r\n'));
  });
};

async function handleError(execute : () => Promise<any>) : Promise<any> {
  try {
    return await execute();
  } catch (err) {
    return Promise.reject(err.message);
  }
}
