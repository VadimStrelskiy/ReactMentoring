import {useState} from "react";
import './MovieCard.scss';
import {Movie} from '../../App';
import {MovieMenu} from './MovieMenu/MovieMenu';

interface MovieCardProps{
  movie: Movie,
  onEdit: (number) => void,
  onDelete: (number) => void
}

export function MovieCard({movie, onEdit, onDelete}: MovieCardProps) {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  function menuHandler(){
    setShowMenu(!showMenu);
  }

  function onMouseLeave(){
    setShowMenu(false);
  }

  function onDeleteId(){
    onDelete(movie.id);
  }

  function onEditId(){
    onEdit(movie.id);
  }

  return (
    <div className='movie-card-container' onMouseLeave={onMouseLeave}>
      <img className='movie-image' src={`/static/${movie.image}`}/>
      <p className='movie-title'>{movie.title}</p>
      <p className='movie-year'>{movie.year}</p>
      <p className='movie-genre'>{movie.genre}</p>
      <div className='movie-menu-button' onClick={menuHandler}>
        <div className='movie-menu-button-dot'/>
        <div className='movie-menu-button-dot'/>
        <div className='movie-menu-button-dot'/>
      </div>
      {showMenu ?
        <MovieMenu
          onClose={menuHandler}
          onDelete={onDeleteId}
          onEdit={onEditId}/>
        : null}
    </div>
  );
}

