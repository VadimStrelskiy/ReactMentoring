import {DeleteModal} from './DeleteModal';
import {render, waitFor, fireEvent} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import '@testing-library/jest-dom';
import {store} from '../../../Store/movieReducer';
import {Provider} from 'react-redux';
import * as MovieService from '../../../Services/MovieService';

const renderComponent = (params) => render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/search/test${params}`]}>
        <Routes>
          <Route path='/search' element={<DeleteModal onClose={() => {}} id={5}/>}/>
          <Route path='/search/:searchQuery' element={<DeleteModal onClose={() => {}} id={5}/>}/>
        </Routes>
      </MemoryRouter>
    </Provider>,
);

const apiMock = jest.fn();
beforeEach(() => {
  jest.spyOn(MovieService, 'deleteMovieApi').mockImplementation(apiMock);
});

it('submit valid form', async () =>{
  const {getByText} = renderComponent('');
  fireEvent.click(getByText('CONFIRM'));
  await waitFor(() => expect(apiMock).toBeCalledWith(5), {timeout: 2000});
});
