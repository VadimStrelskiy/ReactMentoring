import {GenreSelector} from './GenreSelector';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {act} from 'react-dom/test-utils';
import mockRouter from 'next-router-mock';


jest.mock('next/router', () => require('next-router-mock'));

let routerSpy;
beforeEach(() => {
  mockRouter.setCurrentUrl('/search');
  routerSpy = jest.spyOn(mockRouter, 'push');
});


it('initially all genres are selected', () =>{
  const {container, getByText} = render(<GenreSelector/>);
  expect(container.getElementsByClassName('selected').length).toBe(10);
  expect(getByText('ALL')).toHaveClass('selected');
});

it('applies genres from query', async () =>{
  mockRouter.setCurrentUrl('/search?filter=Action,Adventure');
  const {container, getByText} = render(<GenreSelector/>);

  expect(container.getElementsByClassName('selected').length).toBe(2);
  expect(getByText('Action')).toHaveClass('selected');
  expect(getByText('Adventure')).toHaveClass('selected');
});

it('update genre after click', async () =>{
  mockRouter.setCurrentUrl('/search?filter=Action,Adventure');
  const {container, getByText} = render(<GenreSelector/>);

  await act(() => userEvent.click(getByText('Romance')));
  expect(container.getElementsByClassName('selected').length).toBe(3);
  expect(getByText('Action')).toHaveClass('selected');
  expect(getByText('Adventure')).toHaveClass('selected');
  expect(getByText('Romance')).toHaveClass('selected');
  expect(routerSpy).toBeCalledWith('/search?filter=Action%2CAdventure%2CRomance');
});

it('update genre after click ALL', async () =>{
  mockRouter.setCurrentUrl('/search?filter=Action,Adventure');
  const {container, getByText} = render(<GenreSelector/>);

  await act(() => userEvent.click(getByText('ALL')));
  expect(container.getElementsByClassName('selected').length).toBe(10);
});

it('deselect all after click ALL', async () =>{
  const {container, getByText} = render(<GenreSelector/>);

  await act(() => userEvent.click(getByText('ALL')));
  expect(container.getElementsByClassName('selected').length).toBe(0);
});

it('deselect genre after click', async () =>{
  mockRouter.setCurrentUrl('/search?filter=Action,Adventure');
  const {container, getByText} = render(<GenreSelector/>);

  await act(() => userEvent.click(getByText('Action')));
  expect(container.getElementsByClassName('selected').length).toBe(1);
  expect(getByText('Adventure')).toHaveClass('selected');
});

it('select all after adding missing all', async () =>{
  mockRouter.setCurrentUrl('/search?filter=Action,Adventure,Drama,Romance,Animation,Family,Comedy,Fantasy');
  const {container, getByText} = render(<GenreSelector/>);

  expect(container.getElementsByClassName('selected').length).toBe(8);

  await act(() => userEvent.click(getByText('Science Fiction')));
  expect(container.getElementsByClassName('selected').length).toBe(10);
  expect(routerSpy).toBeCalledWith('/search');
});

it('remove filter as part of query string', async () =>{
  mockRouter.setCurrentUrl('/search?filter=Action,Adventure,Drama,Romance,Animation,Family,Comedy,Fantasy&sortBy=release_date');
  const {getByText} = render(<GenreSelector/>);
  await act(() => userEvent.click(getByText('Science Fiction')));
  expect(routerSpy).toBeCalledWith('/search?sortBy=release_date');
});
