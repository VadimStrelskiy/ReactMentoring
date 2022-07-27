import {MovieCard} from './MovieCard';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Movie} from '../../App';
import mockRouter from 'next-router-mock';

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

jest.mock('next/router', () => require('next-router-mock'));

beforeEach(() => {
  mockRouter.setCurrentUrl('/search');
});

it('contains proper details link', async () =>{
  mockRouter.setCurrentUrl('/search?filter=Action');
  const {getByRole} = render(<MovieCard movie={movie}/>);
  expect(getByRole('link')).toHaveAttribute('href', '/search?filter=Action&movie=5');
});
