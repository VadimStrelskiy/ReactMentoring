import {EditModal} from './EditModal';
import {render, waitFor, fireEvent, act} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import '@testing-library/jest-dom';
import {store} from '../../../Store/movieReducer';
import {Provider} from 'react-redux';
import * as MovieService from '../../../Services/MovieService';
import {Movie} from '../../App';

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

const renderComponent = (params) => render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/search/test${params}`]}>
        <Routes>
          <Route path='/search' element={<EditModal onClose={() => {}} movie={movie}/>}/>
          <Route path='/search/:searchQuery' element={<EditModal onClose={() => {}} movie={movie}/>}/>
        </Routes>
      </MemoryRouter>
    </Provider>,
);

const apiMock = jest.fn();
beforeEach(() => {
  jest.spyOn(MovieService, 'createOrUpdateMovieApi').mockImplementation(apiMock);
});

it('submit valid form', async () =>{
  const {getByText} = renderComponent('');
  await act(() => {
    fireEvent.click(getByText('SUBMIT'));
  });
  await waitFor(() => expect(apiMock).toBeCalledWith(movie), {timeout: 2000});
});
