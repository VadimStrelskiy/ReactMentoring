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
  if (movie == null) {
    movie = {
      release_date: null,
      overview: '',
      //genre: '',
      id: -1,
      poster_path: '',
      vote_average: null,
      runtime: null,
      title: '',
      genres: [],
    };
  }

  const isNew = movie === null;

  const reducer = (state : Movie, action) : Movie => {
    switch (action.type) {
      case 'title': {
        return {...state, title: action.payload};
      }
      case 'release_date': {
        return {...state, release_date: action.payload};
      }
      case 'poster_path': {
        return {...state, poster_path: action.payload};
      }
      case 'vote_average': {
        return {...state, vote_average: action.payload};
      }
      case 'genres': {
        return {...state, genres: action.payload};
      }
      case 'runtime': {
        return {...state, runtime: action.payload};
      }
      case 'overview': {
        return {...state, overview: action.payload};
      }
      case 'reset': {
        state.title = '';
        state.release_date = null;
        state.poster_path = '';
        state.vote_average = null;
        state.genres = [];
        state.runtime = null;
        state.overview = '';
        return {...state};
      }
    }
  };

  const [form, dispatch] = useReducer(reducer, movie);

  return (
    <div className="edit-modal">
      <button className='edit-close' onClick={onClose}>&times;</button>
      <h2>{isNew ? 'ADD MOVIE' : 'EDIT MOVIE'}</h2>

      <br/>
      <div className="first-column">
        <label>TITLE</label>
        <input value={form.title} placeholder="Movie title" onChange={(e) => dispatch({type: 'title', payload: e.target.value})}/>
      </div>

      <div className="second-column">
        <label>RELEASE DATE</label>
        <DatePicker selected={form.release_date} placeholderText="Select Date" onChange={(e) => dispatch({type: 'release_date', payload: e.target.value})}/>
      </div>

      <div className="first-column">
        <label>MOVIE URL</label>
        <input value={form.poster_path} placeholder="https://" onChange={(e) => dispatch({type: 'poster_path', payload: e.target.value})}/>
      </div>

      <div className="second-column">
        <label>RATING</label>
        <input value={form.vote_average || ''} placeholder="7.8" onChange={(e) => dispatch({type: 'vote_average', payload: e.target.value})}/>
      </div>

      <div className="first-column">
        <label>GENRE</label>

        {/* <select value={form.genre} onChange={(e) => dispatch({type: 'genre', payload: e.target.value})}>
          <option value="" disabled>Select Genre</option>
          {
            genres.map((option) =>
              <option key={option} value={option}>{option}</option>,
            )
          }
        </select> */}
      </div>

      <div className="second-column">
        <label>RUNTIME</label>
        <input value={form.runtime || ''} placeholder="minutes" onChange={(e) => dispatch({type: 'runtime', payload: e.target.value})}/>
      </div>

      <div className="overview">
        <label>OVERVIEW</label>
        <textarea value={form.overview} placeholder="Movie description" onChange={(e) => dispatch({type: 'overview', payload: e.target.value})}/>
      </div>

      <button className='transparent-button reset-button' onClick={(e) => dispatch({type: 'reset'})}>RESET</button>
      <button className='red-button submit-button'>SUBMIT</button>
    </div>
  );
}

