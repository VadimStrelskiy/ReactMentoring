import {GenreSelector} from './GenreSelector';
import {render} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router';
import {act} from 'react-dom/test-utils';

const renderComponent = (params) => render(
    <MemoryRouter initialEntries={[`/search/test${params}`]}>
      <Routes>
        <Route path='/search' element={<GenreSelector/>}/>
        <Route path='/search/:searchQuery' element={<GenreSelector/>}/>
      </Routes>
    </MemoryRouter>,
);

const navigateMock = jest.fn();
beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);
});


it('initially all genres are selected', () =>{
  const {container, getByText} = renderComponent('');
  expect(container.getElementsByClassName('selected').length).toBe(10);
  expect(getByText('ALL')).toHaveClass('selected');
});

it('applies genres from query', async () =>{
  const {container, getByText} = renderComponent('?filter=Action,Adventure');

  expect(container.getElementsByClassName('selected').length).toBe(2);
  expect(getByText('Action')).toHaveClass('selected');
  expect(getByText('Adventure')).toHaveClass('selected');
});

it('update genre after click', async () =>{
  const {container, getByText} = renderComponent('?filter=Action,Adventure');

  await act(() => userEvent.click(getByText('Romance')));
  expect(container.getElementsByClassName('selected').length).toBe(3);
  expect(getByText('Action')).toHaveClass('selected');
  expect(getByText('Adventure')).toHaveClass('selected');
  expect(getByText('Romance')).toHaveClass('selected');
  expect(navigateMock).toBeCalledWith('/search/test?filter=Action%2CAdventure%2CRomance');
});

it('update genre after click ALL', async () =>{
  const {container, getByText} = renderComponent('?filter=Action,Adventure');

  await act(() => userEvent.click(getByText('ALL')));
  expect(container.getElementsByClassName('selected').length).toBe(10);
});

it('deselect all after click ALL', async () =>{
  const {container, getByText} = renderComponent('');

  await act(() => userEvent.click(getByText('ALL')));
  expect(container.getElementsByClassName('selected').length).toBe(0);
});

it('deselect genre after click', async () =>{
  const {container, getByText} = renderComponent('?filter=Action,Adventure');

  await act(() => userEvent.click(getByText('Action')));
  expect(container.getElementsByClassName('selected').length).toBe(1);
  expect(getByText('Adventure')).toHaveClass('selected');
});

it('select all after adding missing all', async () =>{
  const {container, getByText} = renderComponent('?filter=Action,Adventure,Drama,Romance,Animation,Family,Comedy,Fantasy');
  expect(container.getElementsByClassName('selected').length).toBe(8);

  await act(() => userEvent.click(getByText('Science Fiction')));
  expect(container.getElementsByClassName('selected').length).toBe(10);
  expect(navigateMock).toBeCalledWith('/search/test');
});

it('remove filter as part of query string', async () =>{
  const {getByText} = renderComponent('?filter=Action,Adventure,Drama,Romance,Animation,Family,Comedy,Fantasy&sortBy=release_date');
  await act(() => userEvent.click(getByText('Science Fiction')));
  expect(navigateMock).toBeCalledWith('/search/test?sortBy=release_date');
});
