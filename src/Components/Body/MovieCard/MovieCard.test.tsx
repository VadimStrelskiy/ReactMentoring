import {MovieCard} from './MovieCard';
import {render} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import '@testing-library/jest-dom';
import {Movie} from '../../App';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router';

const movie : Movie = {
  id: 5,
  title: 'test title',
  release_date: new Date(),
  poster_path: 'http://test.com',
  vote_average: 50,
  genres: ['Adventure', 'Comedy'],
  runtime: 120,
  overview: 'test overview',
};

const renderComponent = (params) => render(
    <MemoryRouter initialEntries={[`/search/test${params}`]}>
      <Routes>
        <Route path='/search' element={<MovieCard movie={movie}/>}/>
        <Route path='/search/:searchQuery' element={<MovieCard movie={movie}/>}/>
      </Routes>
    </MemoryRouter>,
);

const navigateMock = jest.fn();
beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);
});

it('image click triggers navigate', async () =>{
  const {container} = renderComponent('?filter=Action');
  await userEvent.click(container.getElementsByClassName('movie-image')[0]);
  expect(navigateMock).toBeCalledWith('/search/test?filter=Action&movie=5');
});
