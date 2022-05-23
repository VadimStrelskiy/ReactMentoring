import './Search.scss';

function Search() {
    return (
      <>
          <input className='search-input' placeholder='What do you want to watch?'/>
          <button className='search-button'>
              <label>SEARCH</label>
          </button>
      </>
    )
  }

  export default Search;
