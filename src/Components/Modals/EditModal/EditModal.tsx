import './EditModal.scss';
import {Movie} from '../../App';
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EditModalProps{
  movie: Movie,
  onSave: () => void,
  onClose: () => void
}

export function EditModal({onSave, onClose, movie} : EditModalProps) {
  const isNew = movie === null;

  const [movieState, setMovie] = useState(movie);

  return (
    <div className="edit-modal">
        <button className='edit-close' onClick={onClose}>&times;</button>
        <h1>DELETE MOVIE</h1>
        
        <div className="first-column">
            <label>TITLE</label>
            <input defaultValue={movie.title}/>
        </div>
        
        <div className="second-column">
            <label>RELEASE DATE</label>
            <DatePicker selected={movie.date}/>
        </div>

        <div className="first-column">
            <label>MOVIE URL</label>
            <input defaultValue={movie.title}/>
        </div>

        <div className="second-column">
            <label>RATING</label>
            <input defaultValue={movie.rating}/>
        </div>


        <div className="first-column">
            <label>MOVIE URL</label>
            <input defaultValue={movie.genre}/>
        </div>

        <div className="second-column">
            <label>RUNTIME</label>
            <input defaultValue={movie.runtime}/>
        </div>

        <div className="overview">
            <label>OVERVIEW</label>
            <input defaultValue={movie.description}/>
        </div>

        <button className='save-confirm' onClick={onSave}>CONFIRM</button>
    </div>
  );
}

