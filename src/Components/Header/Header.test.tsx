import {Header} from './Header';
import {render, act, RenderResult} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import '@testing-library/jest-dom';
import {store} from '../../Store/movieReducer';
import {Provider} from 'react-redux';
import * as MovieService from '../../Services/MovieService';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const renderComponent = (params, appStore) => render(
    <Provider store={appStore}>
      <MemoryRouter initialEntries={[`/search/test${params}`]}>
        <Routes>
          <Route path='/search' element={<Header/>}/>
          <Route path='/search/:searchQuery' element={<Header/>}/>
        </Routes>
      </MemoryRouter>
    </Provider>,
);

const getMoviesApiMock = jest.fn();
const getMovieApiMock = jest.fn();
beforeEach(() => {
  jest.spyOn(MovieService, 'getMoviesApi').mockImplementation(getMoviesApiMock);
  jest.spyOn(MovieService, 'getMovieApi').mockImplementation(getMovieApiMock);
});

const state = {
  movie: {
    id: 5,
    genres: [],
    overview: '',
    release_date: null,
    runtime: 0,
    title: 'test-title',
    vote_average: 0,
    poster_path: '',
  },
};

it('search mode without movie initially', () =>{
  const {getByText} = renderComponent('', store);
  expect(getByText('SEARCH')).toBeInTheDocument();
});

it('movies request performed', async () =>{
  renderComponent('?filter=Action', store);
  await expect(getMoviesApiMock).toBeCalledWith('test', 'filter=Action');
});

it('movie request performed', async () =>{
  await act(() => {
    renderComponent('?movie=5', store);
  });

  await expect(getMovieApiMock).toBeCalledWith('5');
});

it('switch to details mode', async () =>{
  const mockStore = configureMockStore([thunk]);
  let renderResult : RenderResult;
  await act(() => {
    renderResult = renderComponent('?movie=5', mockStore(() => state));
  });

  expect(renderResult.getByText('test-title')).toBeInTheDocument();
});
