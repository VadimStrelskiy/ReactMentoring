import {Movie} from '../Components/App';

const baseUrl = 'http://localhost:4000/movies';

export async function getMoviesApi(searchQuery : string) : Promise<Movie[]> {
  return await handleError(async () =>{
    let url = baseUrl;
    if (searchQuery) {
      url += '?' + searchQuery;
    }
    const response = await window.fetch(url);
    const data = await response.json();
    if (response.ok) {
      return data.data;
    }

    throw new Error(response.statusText ? response.statusText : data);
  });
}

export async function getMovieApi(id : string) : Promise<Movie> {
  return await handleError(async () =>{
    const url = baseUrl + '/' + id;
    const response = await window.fetch(url);
    const data = await response.json();
    if (response.ok) {
      return data;
    }

    throw new Error(response.statusText ? response.statusText : data);
  });
}

export async function deleteMovieApi(id : number) {
  return await handleError(async () => {
    const url = baseUrl + '/' + id;
    const response = await window.fetch(url, {method: 'DELETE'});
    if (response.ok) {
      return;
    }

    throw new Error(response.statusText);
  });
};

export async function createOrUpdateMovieApi(movie : Movie) {
  return await handleError(async () => {
    const method = movie.id > 0 ? 'PUT' : 'POST';
    const headers = {
      'Content-Type': 'application/json',
    };

    if (movie.id <= 0) {
      movie.id = undefined;
    }

    const body = JSON.stringify(movie);

    const response = await window.fetch(baseUrl, {method, body, headers});
    if (response.ok) {
      return;
    }

    const messages = (await response.json()).messages;

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
