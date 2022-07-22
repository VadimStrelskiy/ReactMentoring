import {Header} from './Header/Header';
import {Body} from './Body/Body';
import {NotFound} from './NotFound/NotFound';
import {Footer} from './Footer/Footer';
import {HashRouter} from 'react-router-dom';
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.module.scss';

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

/* eslint-disable no-unused-vars */
export const enum SortOptionType {
  ReleaseDateAsc = 1,
  ReleaseDateDesc = 2,
  RatingAsc = 3,
  RatingDesc = 4
};

export function App() {
  return (
    <HashRouter>
      <div className='app-container'>
        <Routes>
          <Route path="/search" element={
            <>
              <Header/>
              <Body />
            </>} />
          <Route path="/search/:searchQuery" element={
            <>
              <Header/>
              <Body />
            </>} />
          <Route path="/" element={<Navigate to="/search" />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer><p className='netflix-roulett-text'><b>netflix</b>roulette</p></Footer>
      </div>
    </HashRouter>
  );
}
