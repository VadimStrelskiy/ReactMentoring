import styles from './GenreSelector.module.scss';
import {useGenres, allGenres} from './GenreSelectorHook';

export function GenreSelector() {
  const [genres, updateGenres] = useGenres();

  return (
    <div className={styles.genreSelector}>
      {
        allGenres.map((g) =>
          <a key={g} onClick={() => updateGenres(g)} className={genres.includes(g) ? styles.selected : ''}>{g}</a>,
        )
      }
    </div>
  );
}

