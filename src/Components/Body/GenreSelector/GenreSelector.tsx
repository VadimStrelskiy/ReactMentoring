import './GenreSelector.scss';

const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

function GenreSelector() {
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

export default GenreSelector;
