import './GenreSelector.scss';
import {useGenres, allGenres} from './GenreSelectorHook';


export function GenreSelector() {
  const {genres, updateGenres} = useGenres();

  return (
    <div className='genre-selector'>
      {
        allGenres.map((g) =>
          <a key={g} onClick={() => updateGenres(g)} className={genres.includes(g) ? 'selected' : ''}>{g}</a>,
        )
      }
    </div>
  );
}

