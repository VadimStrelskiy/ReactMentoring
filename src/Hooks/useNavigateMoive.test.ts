import {renderHook, act} from '@testing-library/react-hooks';
import {useNavigateMovie} from './useNavigateMoive';
import {parse} from 'querystring';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

let routerSpy;
beforeEach(() => {
  mockRouter.setCurrentUrl('/search');
  routerSpy = jest.spyOn(mockRouter, 'push');
});


test('should call navigate with proper query and params', () => {
  const {result} = renderHook(() => useNavigateMovie());
  const params = parse('p1=v1');
  act(() => {
    result.current('query', params);
  });

  expect(routerSpy).toBeCalledWith('/search/query?p1=v1');
});
