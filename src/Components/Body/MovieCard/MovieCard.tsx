import './MovieCard.scss';
import Popup from "reactjs-popup";
import {useState} from "react";
import {Movie} from '../../App';
import {MovieMenu} from './MovieMenu/MovieMenu';

interface MovieCardProps{
  movie: Movie,
  onDelete: (number) => void,
}

export function MovieCard({movie, onDelete}: MovieCardProps) {

  const [menuOpenState, setMenuOpen] = useState(false);

  function onDeleteId(){
    onDelete(movie.id);
  }

  function onModalClose(){
    setMenuOpen(false);
  }

  return (
    <div className='movie-card-container'>
      <img className='movie-image' src={`/static/${movie.image}`}/>
      <p className='movie-title'>{movie.title}</p>
      <p className='movie-year'>{movie.date.getFullYear()}</p>
      <p className='movie-genre'>{movie.genre}</p>
      <Popup arrow={false} trigger={
        <button className='movie-menu-button'>
          <div className='movie-menu-button-dot first'/>
          <div className='movie-menu-button-dot'/>
          <div className='movie-menu-button-dot'/>
        </button>}
        open={menuOpenState} onOpen={() => setMenuOpen(true)}>
        <MovieMenu
            movie={movie}
            onClose={()=> setMenuOpen(false)}
            onDelete={onDeleteId}
            onModalClose = {onModalClose}/>
      </Popup>
    </div>
  );
}

