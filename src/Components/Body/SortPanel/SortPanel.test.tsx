import {SortPanel} from './SortPanel';
import {render, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

let routerSpy;
beforeEach(() => {
  mockRouter.setCurrentUrl('/search');
  routerSpy = jest.spyOn(mockRouter, 'push');
});

it('initially rating desc selected', () =>{
  const {getByRole} = render(<SortPanel/>);
  expect(getByRole('combobox')).toHaveValue('4');
});

it('changing option applies navigate', async () =>{
  const {getByRole} = render(<SortPanel/>);

  await act(() => {
    fireEvent.change(getByRole('combobox'), {target: {value: '1'}});
  });

  expect(routerSpy).toBeCalledWith('/search?sortOrder=asc&sortBy=release_date');

  await act(() => {
    fireEvent.change(getByRole('combobox'), {target: {value: '2'}});
  });
  expect(routerSpy).toBeCalledWith('/search?sortOrder=desc&sortBy=release_date');

  await act(() => {
    fireEvent.change(getByRole('combobox'), {target: {value: '3'}});
  });
  expect(routerSpy).toBeCalledWith('/search?sortOrder=asc&sortBy=vote_average');

  await act(() => {
    fireEvent.change(getByRole('combobox'), {target: {value: '4'}});
  });
  expect(routerSpy).toBeCalledWith('/search?sortOrder=desc&sortBy=vote_average');
});

it('initially release date asc selected in query', () =>{
  mockRouter.setCurrentUrl('/search?sortOrder=asc&sortBy=release_date');
  const {getByRole} = render(<SortPanel/>);
  expect(getByRole('combobox')).toHaveValue('1');
});

it('initially release date asc selected in query', () =>{
  mockRouter.setCurrentUrl('/search?sortOrder=desc&sortBy=release_date');
  const {getByRole} = render(<SortPanel/>);
  expect(getByRole('combobox')).toHaveValue('2');
});

it('initially rating asc selected in query', () =>{
  mockRouter.setCurrentUrl('/search?sortOrder=asc&sortBy=vote_average');
  const {getByRole} = render(<SortPanel/>);
  expect(getByRole('combobox')).toHaveValue('3');
});

it('initially rating desc selected in query', () =>{
  mockRouter.setCurrentUrl('/search?sortOrder=desc&sortBy=vote_average');
  const {getByRole} = render(<SortPanel/>);
  expect(getByRole('combobox')).toHaveValue('4');
});
