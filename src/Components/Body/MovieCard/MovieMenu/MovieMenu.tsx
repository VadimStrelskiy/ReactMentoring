import Popup from "reactjs-popup";
import {DeleteModal} from "../../../Modals/DeleteModal/DeleteModal"
import {EditModal} from "../../../Modals/EditModal/EditModal"
import {Movie} from "../../../App"
import {useState} from "react";
import './MovieMenu.scss';

interface MovieMenuProps{
    movie : Movie,
    onEdit: () => void,
    onDelete: () => void,
    onClose: () => void
}

export function MovieMenu(props : MovieMenuProps) {

  const [editOpen, setEditOpen] = useState(false);
  const closeEdit = () => setEditOpen(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const closeDelete = () => setDeleteOpen(false);

  return (
    <div className="movie-menu">
        <button className='movie-menu-close' onClick={props.onClose}>&times;</button>
        <div className='movie-menu-edit' onClick={() => setEditOpen(true)}>Edit</div>
        <div className='movie-menu-delete' onClick={() => setDeleteOpen(true)}>Delete</div>
        <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={closeEdit}><EditModal onSave={props.onEdit} onClose={closeEdit} movie={props.movie}/></Popup>
        <Popup modal closeOnDocumentClick={false} open={deleteOpen} onClose={closeDelete}>{<DeleteModal onDelete={props.onDelete} onClose={closeDelete}/>}</Popup>
    </div>
  );
}

