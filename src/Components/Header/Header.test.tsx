import {Header} from './Header';
import {Movie} from './../App';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {State} from '../../Store/movieReducer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
const renderComponent = (appStore) => render(
    <Provider store={appStore}>
      <Header/>
    </Provider>,
);

beforeEach(() => {
  mockRouter.setCurrentUrl('/search/test');
});

const movie : Movie = {
  id: 5,
  genres: [],
  overview: '',
  release_date: null,
  runtime: 0,
  title: 'test-title',
  vote_average: 0,
  poster_path: '',
};

const emptyState = {
  movie: null,
};

const stateWithMove : State = {
  movie: movie,
  error: null,
  movies: [],
};

const mockStore = configureMockStore([thunk]);

it('search mode without movie initially', () =>{
  const {getByText} = renderComponent(mockStore(() => emptyState));
  expect(getByText('SEARCH')).toBeInTheDocument();
});

it('details mode initially if movie set', async () =>{
  const {getByText} = renderComponent(mockStore(() => stateWithMove));
  expect(getByText('test-title')).toBeInTheDocument();
});

