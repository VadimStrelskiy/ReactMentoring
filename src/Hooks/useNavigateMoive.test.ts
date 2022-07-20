import {renderHook, act} from '@testing-library/react-hooks';
import {useNavigateMovie} from './useNavigateMoive';
import * as router from 'react-router';

const navigateMock = jest.fn();
beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigateMock);
});

test('should call navigate with proper query and params', () => {
  const {result} = renderHook(() => useNavigateMovie());

  const params = new URLSearchParams();
  params.set('p1', 'v1');

  act(() => {
    result.current('query', params);
  });

  expect(navigateMock).toBeCalledWith('/search/query?p1=v1');
});
