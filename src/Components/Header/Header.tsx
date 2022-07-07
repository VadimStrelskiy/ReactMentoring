import {Search} from './Search/Search';
import {SearchToggle} from './SearchToggle/SearchToggle';
import {MovieDetails} from './MovieDetails/MovieDetails';
import './Header.scss';
import {useState} from 'react';
import Popup from 'reactjs-popup';
import {EditModal} from '../Modals/EditModal/EditModal';
import {useAppSelector} from '../../Store/movieReducer';
import {
  Routes,
  Route,
  Navigate,
  useParams
} from "react-router-dom";

export function Header() {
  const [editOpen, setEditOpen] = useState(false);
  //const movie = useAppSelector((state) => state.movieDetails);


  return (
    <header>
      <p className='netflix-roulett-text'><strong>netflix</strong>roulette</p>

      <Routes>
          <Route path="/search" element={<Search/>} />
          <Route path="/search/:searchQuery" element={<Search/>} />
          <Route path="/" element={<Navigate to="/search" />}/>
      </Routes>


      {/* {movie == null ?
        (
           ) :
          (<>
            <SearchToggle/>
            <br/>
            <MovieDetails movie={movie}/>
          </>)
      } */}

      <Popup modal closeOnDocumentClick={false} open={editOpen} onClose={() => setEditOpen(false)}>{<EditModal onClose={() => setEditOpen(false)} movie={null}/>}</Popup>
    </header>
  );
}

