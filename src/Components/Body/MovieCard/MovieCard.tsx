import './MovieCard.scss';
import Popup from "reactjs-popup";
import {useState} from "react";
import {Movie} from '../../App';
import {MovieMenu} from './MovieMenu/MovieMenu';

interface MovieCardProps{
  movie: Movie,
  onEdit: (number) => void,
  onDelete: (number) => void,
}

export function MovieCard({movie, onEdit, onDelete}: MovieCardProps) {

  const [menuOpen, setMenuOpen] = useState(false);
  
  function onDeleteId(){
    onDelete(movie.id);
  }

  function onEditId(){
    onEdit(movie.id);
  }

  return (
    <div className='movie-card-container'>
      <img className='movie-image' src={`/static/${movie.image}`}/>
      <p className='movie-title'>{movie.title}</p>
      <p className='movie-year'>{movie.date.getFullYear()}</p>
      <p className='movie-genre'>{movie.genre}</p>
      <Popup arrow={false} closeOnDocumentClick={false} trigger={
        <button className='movie-menu-button'>
          <div className='movie-menu-button-dot first'/>
          <div className='movie-menu-button-dot'/>
          <div className='movie-menu-button-dot'/>
        </button>}
        open={menuOpen} onOpen={() => setMenuOpen(true)}>
        <MovieMenu
            movie={movie}
            onClose={()=> setMenuOpen(false)}
            onDelete={onDeleteId}
            onEdit={onEditId}/>
      </Popup>
    </div>
  );
}

