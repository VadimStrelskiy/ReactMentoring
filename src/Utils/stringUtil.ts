import {ParsedUrlQuery} from 'querystring';

export class stringUtil {
  static formatMinutesToHoursMinutes(allMinutes: number) : string {
    const hours = Math.floor(allMinutes/60);
    const minutes = allMinutes%60;

    return `${hours}h ${minutes}min`;
  }

  static createQueryParamString(query : ParsedUrlQuery, movieId : string, removeMovieParam : boolean) {
    let params = '';
    if (query.filter) {
      params += 'filter=' + query.filter;
    }

    if (query.sortBy) {
      if (params != '') {
        params += '&';
      }
      params += 'sortBy=' + query.sortBy;
    }

    if (query.sortOrder) {
      if (params != '') {
        params += '&';
      }
      params += 'sortOrder=' + query.sortOrder;
    }

    if (!removeMovieParam) {
      if (!movieId) {
        movieId = query.movie as string;
      }

      if (movieId) {
        if (params != '') {
          params += '&';
        }
        params += 'movie=' + movieId;
      }
    }

    return params;
  }
}
