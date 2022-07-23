import {Header} from './Header/Header';
import {Body} from './Body/Body';
import {Footer} from './Footer/Footer';
import styles from './App.module.scss';

export interface Movie {
  id: number,
  poster_path: string,
  title: string,
  release_date: Date,
  vote_average: number,
  runtime: number,
  overview: string,
  genres: string[],
}

export function App() {
  return (
      <div className={styles.appContainer}>
        <Header/>
        <Body />
        <Footer><p className='netflix-roulett-text'><b>netflix</b>roulette</p></Footer>
      </div>
  );
}
