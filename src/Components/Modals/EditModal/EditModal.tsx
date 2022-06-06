import './EditModal.scss';
import {Movie} from '../../App';
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EditModalProps{
  movie: Movie,
  onClose: () => void
}

const genres = ["Action & Adventure", "Drama, Biographt, Music", "Oscar winning Movie"]

export function EditModal({ onClose, movie} : EditModalProps) {
  const isNew = movie === null;

  const [title, setTitle] = useState(movie.title);
  const [date, setDate] = useState(movie.date);
  const [url, setUrl] = useState(movie.url);
  const [rating, setRating] = useState(movie.rating);
  const [genre, setGenre] = useState(movie.genre);
  const [runtime, setRuntime] = useState(movie.runtime);
  const [description, setDescription] = useState(movie.description);

  function onReset(){
    setTitle('');
    setDate(null);
    setUrl('');
    setRating(null);
    setGenre('');
    setRuntime(null);
    setDescription('');
  }

  return (
    <div className="edit-modal">
        <button className='edit-close' onClick={onClose}>&times;</button>
        <h1>{isNew ? 'ADD MOVIE' : 'EDIT MOVIE'}</h1>
        
        <br/>
        <div className="first-column">
            <label>TITLE</label>
            <input value={title} placeholder="Movie title" onChange={e => setTitle(e.target.value)}/>
        </div>
        
        <div className="second-column">
            <label>RELEASE DATE</label>
            <DatePicker selected={date} placeholderText="Select Date" onChange={e => setDate(e)}/>
        </div>

        <div className="first-column">
            <label>MOVIE URL</label>
            <input value={url} placeholder="https://" onChange={e => setUrl(e.target.value)}/>
        </div>

        <div className="second-column">
            <label>RATING</label>
            <input value={rating || ''} placeholder="7.8" onChange={e => setRating(+e.target.value)}/>
        </div>

        <div className="first-column">
            <label>GENRE</label>

            <select value={genre} onChange={e => setGenre(e.target.value)}>
                <option value="" disabled>Select Genre</option>
                    {
                        genres.map((option) =>
                            <option key={option} value={option}>{option}</option>,
                        )
                    }
            </select>
        </div>

        <div className="second-column">
            <label>RUNTIME</label>
            <input value={runtime || ''} placeholder="minutes" onChange={e => setRuntime(+e.target.value)}/>
        </div>

        <div className="overview">
            <label>OVERVIEW</label>
            <textarea value={description} placeholder="Movie description" onChange={e => setDescription(e.target.value)}/>
        </div>

        <button className='transparent-button reset-button' onClick={onReset}>RESET</button>
        <button className='red-button submit-button'>SUBMIT</button>
    </div>
  );
}

