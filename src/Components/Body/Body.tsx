import GenreSelector from './GenreSelector/GenreSelector';
import SortPanel from './SortPanel/SortPanel';
import './Body.scss'
import MoviesList from './MoviesList/MoviesList';



function Body() {
    return (
      <div className="page-body">
        <GenreSelector/>
        <SortPanel/>
        <hr/>
        <MoviesList/>
      </div>
    )
  }

  export default Body;
