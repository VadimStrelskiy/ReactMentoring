import Popup from "reactjs-popup";
import {DeleteModal} from "../../../Modals/DeleteModal/DeleteModal"
import {EditModal} from "../../../Modals/EditModal/EditModal"
import {Movie} from "../../../App"
import {useState} from "react";
import './MovieMenu.scss';

interface MovieMenuProps{
    movie : Movie,
    onDelete: () => void,
    onClose: () => void,
    onModalClose: () => void
}

export function MovieMenu(props : MovieMenuProps) {

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  function closeEdit(){
    setEditOpen(false);
    props.onModalClose();
  } 

  function closeDelete(){
    setDeleteOpen(false);
    props.onModalClose();
  } 

  return (
    <div className="movie-menu">
        <button className='movie-menu-close' onClick={props.onClose}>&times;</button>
        <div className='movie-menu-edit' onClick={() => setEditOpen(true)}>Edit</div>
        <div className='movie-menu-delete' onClick={() => setDeleteOpen(true)}>Delete</div>
        <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={closeEdit}><EditModal onClose={closeEdit} movie={props.movie}/></Popup>
        <Popup modal closeOnDocumentClick={false} open={deleteOpen} onClose={closeDelete}>{<DeleteModal onDelete={props.onDelete} onClose={closeDelete}/>}</Popup>
    </div>
  );
}

