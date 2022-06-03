import './MovieMenu.scss';

interface MovieMenuProps{
    onEdit: () => void,
    onDelete: () => void,
    onClose: () => void,
}

export function MovieMenu(props : MovieMenuProps) {

  return (
    <div className="movie-menu">
        <div className='movie-menu-edit' onClick={props.onEdit}/>
        <div className='movie-menu-delete' onClick={props.onDelete}/>
        <div className='movie-menu-close' onClick={props.onClose}/>
    </div>
  );
}

