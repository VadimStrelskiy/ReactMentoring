import Popup from "reactjs-popup";
import {DeleteModal} from "../../../Modals/DeleteModal/DeleteModal"
import './MovieMenu.scss';

interface MovieMenuProps{
    onEdit: () => void,
    onDelete: () => void,
    onClose: () => void
}

export function MovieMenu(props : MovieMenuProps) {

  return (
    <div className="movie-menu">
        <div className='movie-menu-close' onClick={props.onClose}/>
        <div className='movie-menu-edit' onClick={props.onEdit}>Edit</div>
        <Popup modal trigger={<div className='movie-menu-delete' onClick={props.onDelete}>Delete</div>}><DeleteModal onDelete={props.onDelete} onClose={props.onClose}/></Popup>
    </div>
  );
}

