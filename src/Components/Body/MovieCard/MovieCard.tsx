import {useState} from "react";
import './MovieCard.scss';
import {Movie} from '../Body';
import {MovieMenu} from './MovieMenu/MovieMenu';

export function MovieCard(movie: Movie) {


  const [showMenu, setShowMenu] = useState<boolean>(false);

  function menuHandler(){
    setShowMenu(!showMenu);
  }

  return (
    <div className='movie-card-container'>
      <img className='movie-image' src={`/static/${movie.image}`}/>
      <p className='movie-title'>{movie.title}</p>
      <p className='movie-year'>{movie.year}</p>
      <p className='movie-genre'>{movie.genre}</p>
      <div className='movie-menu-button' onClick={menuHandler}>
        <div className='movie-menu-button-dot'/>
        <div className='movie-menu-dot'/>
        <div className='movie-menu-dot'/>
      </div>
      {showMenu ?
        <div className="movie-menu-container">
          <MovieMenu
            onClose={menuHandler}
            onDelete={null}
            onEdit={null}/>
        </div> : null}
    </div>
  );
}

