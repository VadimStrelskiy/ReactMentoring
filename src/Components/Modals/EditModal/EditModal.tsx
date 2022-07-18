import './EditModal.scss';
import {Movie} from '../../App';
import 'react-datepicker/dist/react-datepicker.css';
import {Genres} from '../../../Store/genres';
import {TextInput} from '../../Forms/TextInput';
import {updateMovie, getMovies, useAppDispatch} from '../../../Store/movieReducer';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {DatePickerInput} from '../../Forms/DatePickerInput';
import {MultiSelectInput} from '../../Forms/MultiSelectInput';
import {TextAreaInput} from '../../Forms/TextAreaInput';
import {useParams, useSearchParams} from 'react-router-dom';

interface EditModalProps{
  movie?: Movie,
  onClose: () => void
}

export function EditModal({onClose, movie} : EditModalProps) {
  const reduxDispatch = useAppDispatch();
  const {searchQuery} = useParams();
  const [searchParams] = useSearchParams();


  const onSave = async (form) => {
    try {
      await reduxDispatch(updateMovie(form)).unwrap().then(() => reduxDispatch(getMovies({searchQuery: searchQuery, searchParams: searchParams.toString()})));
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  const isNew = movie === null;

  if (movie == null) {
    movie = {
      release_date: new Date(),
      overview: '',
      id: -1,
      poster_path: '',
      vote_average: null,
      runtime: null,
      title: '',
      genres: [],
    };
  }

  const initialValues = {
    title: movie.title,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    genres: movie.genres,
    runtime: movie.runtime,
    overview: movie.overview,
  };

  return (
    <div className="edit-modal">
      <button className='edit-close' onClick={onClose}>&times;</button>
      <h2>{isNew ? 'ADD MOVIE' : 'EDIT MOVIE'}</h2>
      <br/>

      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          title: Yup.string()
              .required('Required'),
          release_date: Yup.date()
              .required('Required'),
          poster_path: Yup.string().url()
              .required('Required'),
          vote_average: Yup.number()
              .required('Required')
              .min(0)
              .max(100),
          genres: Yup.array()
              .of(Yup.string())
              .min(1)
              .required('Required'),
          runtime: Yup.number()
              .required('Required')
              .min(0),
          overview: Yup.string()
              .required('Required'),
        })}
        onSubmit={async (values) => {
          const id = movie.id;
          await onSave({...values, id});
        }}>

        {(formProps) =>{
          return (
            <Form>
              <div className="first-column">
                <TextInput
                  label="TITLE"
                  name="title"
                  type="text"
                  placeholder="Movie title"/>
              </div>
              <div className="second-column">
                <DatePickerInput
                  label="RELEASE DATE"
                  name="release_date"
                  placeholder="Select Date"/>
              </div>
              <div className="first-column">
                <TextInput
                  label="POSTER URL"
                  name="poster_path"
                  type="text"
                  placeholder="https://"/>
              </div>
              <div className="second-column">
                <TextInput
                  label="RATING"
                  name="vote_average"
                  type="number"
                  placeholder="7.8"/>
              </div>
              <div className="first-column multiselect">
                <MultiSelectInput
                  label="GENRE"
                  name="genres"
                  options={Genres}
                  placeholder="Select"/>
              </div>
              <div className="second-column">
                <TextInput
                  label="RUNTIME"
                  name="runtime"
                  type="number"
                  placeholder="minutes"/>
              </div>
              <div className="overview">
                <TextAreaInput
                  label="OVERVIEW"
                  name="overview"
                  placeholder="Movie description"/>
              </div>

              <button className='transparent-button reset-button' type='reset' onClick={() => formProps.resetForm({values: initialValues})}>RESET</button>
              <button className='red-button submit-button' type='submit'>SUBMIT</button>
            </Form>
          );
        }
        }
      </Formik>
    </div>
  );
}

