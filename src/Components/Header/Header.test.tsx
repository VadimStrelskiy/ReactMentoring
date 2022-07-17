import { Header } from "./Header";
import {render, fireEvent } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from "react-router-dom";
import '@testing-library/jest-dom';
import {store} from '../../Store/movieReducer';
import * as router from 'react-router';
import {Provider} from 'react-redux';
import * as MovieService from '../../Services/MovieService';

const renderComponent = (params) => render(
    <Provider store={store}>
        <MemoryRouter initialEntries={[`/search/test${params}`]}>
            <Routes>
                <Route path='/search' element={<Header/>}/>
                <Route path='/search/:searchQuery' element={<Header/>}/>
            </Routes>
        </MemoryRouter>
    </Provider>
);


// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
//   })
// );

const apiMock = jest.fn();
beforeEach(() => {
    jest.spyOn(MovieService, 'getMoviesApi').mockImplementation(apiMock);
})

it('search mode without movie initially', () =>{
    const {getByText} = renderComponent('');
    expect(getByText('SEARCH')).toBeInTheDocument();
});

it('movies request performed', async () =>{
    renderComponent('?filter=Action');
    await expect(apiMock).toBeCalledWith('test', 'filter=Action');
});

it('movie request performed and switched to details mode', async () =>{
    renderComponent('?filter=Action');
    await expect(apiMock).toBeCalledWith('test', 'filter=Action');
});

