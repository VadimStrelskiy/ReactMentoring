import styles from './EditModal.module.scss';
import {Movie} from '../../App';
import {Genres} from '../../../Store/genres';
import {TextInput} from '../../Forms/TextInput';
import {updateMovie, getMovies, useAppDispatch} from '../../../Store/movieReducer';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {DatePickerInput} from '../../Forms/DatePickerInput';
import {MultiSelectInput} from '../../Forms/MultiSelectInput';
import {TextAreaInput} from '../../Forms/TextAreaInput';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';
import 'react-datepicker/dist/react-datepicker.css';

interface EditModalProps{
  movie?: Movie,
  onClose: () => void
}

export function EditModal({onClose, movie} : EditModalProps) {
  const reduxDispatch = useAppDispatch();
  const router = useRouter();
  const {searchQuery} = router.query;


  const onSave = async (form) => {
    try {
      await reduxDispatch(updateMovie(form)).unwrap().then(() => reduxDispatch(getMovies({searchQuery: searchQuery as string, searchParams: stringify(router.query)})));
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
    <div className={styles.editModal}>
      <button className={styles.editClose} onClick={onClose}>&times;</button>
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
              <div className={styles.firstColumn}>
                <TextInput
                  label="TITLE"
                  name="title"
                  type="text"
                  placeholder="Movie title"
                  className={styles.formInput}
                  errorClassName={styles.error}
                  />
              </div>
              <div className={styles.secondColumn}>
                <DatePickerInput
                  label="RELEASE DATE"
                  name="release_date"
                  placeholder="Select Date"
                  className={styles.formInput}
                  errorClassName={styles.error}
                  />
              </div>
              <div className={styles.firstColumn}>
                <TextInput
                  label="POSTER URL"
                  name="poster_path"
                  type="text"
                  placeholder="https://"
                  className={styles.formInput}
                  errorClassName={styles.error}
                  />
              </div>
              <div className={styles.secondColumn}>
                <TextInput
                  label="RATING"
                  name="vote_average"
                  type="number"
                  placeholder="7.8"
                  className={styles.formInput}
                  errorClassName={styles.error}
                  />
              </div>
              <div className={`${styles.firstColumn}, ${styles.multiselect}`}>
                <MultiSelectInput
                  label="GENRE"
                  name="genres"
                  options={Genres}
                  placeholder="Select"
                  errorClassName={styles.error}
                  />
              </div>
              <div className={styles.secondColumn}>
                <TextInput
                  label="RUNTIME"
                  name="runtime"
                  type="number"
                  placeholder="minutes"
                  className={styles.formInput}
                  errorClassName={styles.error}
                  />
              </div>
              <div className={styles.overview}>
                <TextAreaInput
                  label="OVERVIEW"
                  name="overview"
                  placeholder="Movie description"
                  className={styles.formInput}
                  errorClassName={styles.error}
                  />
              </div>

              <button className={`${styles.transparentButton} ${styles.resetButton}`} type='reset' onClick={() => formProps.resetForm({values: initialValues})}>RESET</button>
              <button className={`${styles.redButton} ${styles.submitButton}`} type='submit'>SUBMIT</button>
            </Form>
          );
        }
        }
      </Formik>
    </div>
  );
}

