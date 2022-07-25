import {DeleteModal} from './DeleteModal';
import {render, waitFor, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Provider} from 'react-redux';
import * as MovieService from '../../../Services/MovieService';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockRouter from 'next-router-mock';

const mockStore = configureMockStore([thunk]);
jest.mock('next/router', () => require('next-router-mock'));

const renderComponent = () => render(
    <Provider store={mockStore(() => {})}>
      <DeleteModal onClose={() => {}} id={5}/>
    </Provider>,
);

const apiMock = jest.fn();
beforeEach(() => {
  mockRouter.setCurrentUrl('/search');
  jest.spyOn(MovieService, 'deleteMovieApi').mockImplementation(apiMock);
});

it('submit valid form', async () =>{
  const {getByText} = renderComponent();
  await act(() => {
    fireEvent.click(getByText('CONFIRM'));
  });

  await waitFor(() => expect(apiMock).toBeCalledWith(5), {timeout: 2000});
});
