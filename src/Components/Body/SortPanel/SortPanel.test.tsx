import {SortPanel} from './SortPanel';
import {render, fireEvent, act} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import '@testing-library/jest-dom';
import * as router from 'react-router';

const renderComponent = (params) => render(
    <MemoryRouter initialEntries={[`/search/test${params}`]}>
      <Routes>
        <Route path='/search' element={<SortPanel/>}/>
        <Route path='/search/:searchQuery' element={<SortPanel/>}/>
      </Routes>
    </MemoryRouter>,
);

const navigateMock = jest.fn();
beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);
});

it('initially rating desc selected', () =>{
  const {getByRole} = renderComponent('');
  expect(getByRole('combobox')).toHaveValue('4');
});

it('changing option applies navigate', async () =>{
  const {getByRole} = renderComponent('');

  await act(() => {
    fireEvent.change(getByRole('combobox'), {target: {value: '1'}});
  });

  expect(navigateMock).toBeCalledWith('/search/test?sortOrder=asc&sortBy=release_date');

  await act(() => {
    fireEvent.change(getByRole('combobox'), {target: {value: '2'}});
  });
  expect(navigateMock).toBeCalledWith('/search/test?sortOrder=desc&sortBy=release_date');

  await act(() => {
    fireEvent.change(getByRole('combobox'), {target: {value: '3'}});
  });
  expect(navigateMock).toBeCalledWith('/search/test?sortOrder=asc&sortBy=vote_average');

  await act(() => {
    fireEvent.change(getByRole('combobox'), {target: {value: '4'}});
  });
  expect(navigateMock).toBeCalledWith('/search/test?sortOrder=desc&sortBy=vote_average');
});

it('initially release date asc selected in query', () =>{
  const {getByRole} = renderComponent('?sortOrder=asc&sortBy=release_date');
  expect(getByRole('combobox')).toHaveValue('1');
});

it('initially release date asc selected in query', () =>{
  const {getByRole} = renderComponent('?sortOrder=desc&sortBy=release_date');
  expect(getByRole('combobox')).toHaveValue('2');
});

it('initially rating asc selected in query', () =>{
  const {getByRole} = renderComponent('?sortOrder=asc&sortBy=vote_average');
  expect(getByRole('combobox')).toHaveValue('3');
});

it('initially rating desc selected in query', () =>{
  const {getByRole} = renderComponent('?sortOrder=desc&sortBy=vote_average');
  expect(getByRole('combobox')).toHaveValue('4');
});
