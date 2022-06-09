import './DeleteModal.scss';

interface DeleteModalProps{
  onDelete: () => void,
  onClose: () => void
}

export function DeleteModal({onDelete, onClose} : DeleteModalProps) {
  return (
    <div className="delete-modal">
      <button className='delete-close' onClick={onClose}>&times;</button>
      <h2>DELETE MOVIE</h2>
      <p>Are you sure you want to delete this movie?</p>
      <button className='red-button' onClick={onDelete}>CONFIRM</button>
    </div>
  );
}

