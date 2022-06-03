import './GenreSelector.scss';

const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

export function GenreSelector() {
  return (
    <div className='genre-selector'>
      {
        genres.map((i) =>
          <a key={i}>{i}</a>,
        )
      }
    </div>
  );
}

