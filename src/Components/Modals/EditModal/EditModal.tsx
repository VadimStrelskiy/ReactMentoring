import './EditModal.scss';
import {Movie} from '../../App';
import {useReducer} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface EditModalProps{
  movie?: Movie,
  onClose: () => void
}

const genres = ['Action & Adventure', 'Drama, Biographt, Music', 'Oscar winning Movie'];

export function EditModal({onClose, movie} : EditModalProps) {
  const isNew = movie === null;

  const reducer = (state : Movie, action) : Movie => {
    switch (action.type) {
      case 'title': {
        return { ...state, title: action.payload };
      }
      case 'date': {
        return { ...state, date: action.payload };
      }
      case 'url': {
        return { ...state, url: action.payload };
      }
      case 'rating': {
        return { ...state, rating: action.payload };
      }
      case 'genre': {
        return { ...state, genre: action.payload };
      }
      case 'runtime': {
        return { ...state, runtime: action.payload };
      }
      case 'description': {
        return { ...state, description: action.payload };
      }
      case 'reset': {
        state.title = '';
        state.date = null;
        state.url = '';
        state.rating = null;
        state.genre = '';
        state.runtime = null;
        state.description = '';
        return {...state};
      }
    }
  };

  const [form, dispatch] = useReducer(reducer, movie);

  return (
    <div className="edit-modal">
      <button className='edit-close' onClick={onClose}>&times;</button>
      <h1>{isNew ? 'ADD MOVIE' : 'EDIT MOVIE'}</h1>

      <br/>
      <div className="first-column">
        <label>TITLE</label>
        <input value={form.title} placeholder="Movie title" onChange={(e) => dispatch({ type: 'title', payload: e.target.value })}/>
      </div>

      <div className="second-column">
        <label>RELEASE DATE</label>
        <DatePicker selected={form.date} placeholderText="Select Date" onChange={(e) => dispatch({ type: 'date', payload: e.target.value })}/>
      </div>

      <div className="first-column">
        <label>MOVIE URL</label>
        <input value={form.url} placeholder="https://" onChange={(e) => dispatch({ type: 'url', payload: e.target.value })}/>
      </div>

      <div className="second-column">
        <label>RATING</label>
        <input value={form.rating || ''} placeholder="7.8" onChange={(e) => dispatch({ type: 'rating', payload: e.target.value })}/>
      </div>

      <div className="first-column">
        <label>GENRE</label>

        <select value={form.genre} onChange={(e) => dispatch({ type: 'genre', payload: e.target.value })}>
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
        <input value={form.runtime || ''} placeholder="minutes" onChange={(e) => dispatch({ type: 'runtime', payload: e.target.value })}/>
      </div>

      <div className="overview">
        <label>OVERVIEW</label>
        <textarea value={form.description} placeholder="Movie description" onChange={(e) => dispatch({ type: 'description', payload: e.target.value })}/>
      </div>

      <button className='transparent-button reset-button' onClick={(e) => dispatch({ type: 'reset'})}>RESET</button>
      <button className='red-button submit-button'>SUBMIT</button>
    </div>
  );
}

