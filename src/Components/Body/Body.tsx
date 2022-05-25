import GenreSelector from './GenreSelector/GenreSelector';
import SortPanel from './SortPanel/SortPanel';
import './Body.scss'



function Body() {
    return (
      <div className="page-body">
        <GenreSelector/>
        <SortPanel/>
        <hr/>
      </div>
    )
  }

  export default Body;
