import './MovieCard.scss';
import Popup from "reactjs-popup";
import {useState} from "react";
import {Movie} from '../../App';
import {DeleteModal} from "../../Modals/DeleteModal/DeleteModal"
import {EditModal} from "../../Modals/EditModal/EditModal"

interface MovieCardProps{
  movie: Movie,
  onDelete: (number) => void,
}

export function MovieCard({movie, onDelete}: MovieCardProps) {

  const [menuOpenState, setMenuOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

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
          <div className="movie-menu">
            <button className='movie-menu-close' onClick={() => setMenuOpen(false)}>&times;</button>
            <div className='movie-menu-edit' onClick={() => setEditOpen(true)}>Edit</div>
            <div className='movie-menu-delete' onClick={() => setDeleteOpen(true)}>Delete</div>
          </div>
      </Popup>
      <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}><EditModal onClose={() => setEditOpen(false)} movie={movie}/></Popup>
      <Popup modal closeOnDocumentClick={false} open={deleteOpen} onClose={() => setDeleteOpen(false)}>{<DeleteModal onDelete={onDeleteId} onClose={() => setDeleteOpen(false)}/>}</Popup>
    </div>
  );
}

