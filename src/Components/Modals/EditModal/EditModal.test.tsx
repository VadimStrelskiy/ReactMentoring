import {EditModal} from './EditModal';
import {render, waitFor, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import {State} from '../../../Store/movieReducer';
import {Provider} from 'react-redux';
import * as MovieService from '../../../Services/MovieService';
import {Movie} from '../../App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const movie : Movie = {
  id: 0,
  title: 'test title',
  release_date: new Date(),
  poster_path: 'http://test.com',
  vote_average: 50,
  genres: ['Adventure', 'Comedy'],
  runtime: 120,
  overview: 'test overview',
};

const stateWithMove : State = {
  movie: movie,
  error: null,
  movies: [],
};

const mockStore = configureMockStore([thunk]);
jest.mock('next/router', () => require('next-router-mock'));
const renderComponent = () => render(
    <Provider store={mockStore(() => stateWithMove)}>
      <EditModal onClose={() => {}} movie={movie}/>
    </Provider>,
);

const apiMock = jest.fn();
beforeEach(() => {
  jest.spyOn(MovieService, 'createOrUpdateMovieApi').mockImplementation(apiMock);
});

it('submit valid form', async () =>{
  const {getByText} = renderComponent();
  await act(() => {
    fireEvent.click(getByText('SUBMIT'));
  });
  await waitFor(() => expect(apiMock).toBeCalledWith(movie), {timeout: 2000});
});
