import './MovieCard.scss'

export interface Movie {
    image: string,
    title: string,
    genre: string,
    year: number,
}

export function MovieCard(movie: Movie) {
  return(
      <div className='movie-card-container'>
        <img className='movie-image' src={`/static/${movie.image}`}/>
        <p className='movie-title'>{movie.title}</p>
        <p className='movie-year'>{movie.year}</p>
        <p className='movie-genre'>{movie.genre}</p>
      </div>
  )
}

