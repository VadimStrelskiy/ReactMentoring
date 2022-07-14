import { SortPanel } from "./SortPanel";
import {render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from "react-router-dom";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const renderComponent = (query) => render(
    <MemoryRouter initialEntries={[`/search${query}`]}>
        <Routes>
            <Route path='/search' element={<SortPanel/>}/>
            <Route path='/search/:searchQuery' element={<SortPanel/>}/>
        </Routes>
    </MemoryRouter>
);

it('initially rating desc selected', () =>{
    const {container, getByRole} = renderComponent('');
    screen.debug();
    expect(getByRole('combobox')).toHaveValue('4');

    //expect(container.getElementsByClassName('selected').length).toBe(10);
    //expect(getByText('ALL')).toHaveClass('selected');
});

// it('applies genres from query', () =>{
//     const {container, getByText} = renderComponent('/filter=Action,Adventure');

//     expect(container.getElementsByClassName('selected').length).toBe(2);
//     expect(getByText('Action')).toHaveClass('selected');
//     expect(getByText('Adventure')).toHaveClass('selected');
// });

// it('update genre after click', async () =>{

//     const {container, getByText} = renderComponent('/filter=Action,Adventure');

//     await userEvent.click(getByText('Romance'));
//     expect(container.getElementsByClassName('selected').length).toBe(3);
//     expect(getByText('Action')).toHaveClass('selected');
//     expect(getByText('Adventure')).toHaveClass('selected');
//     expect(getByText('Romance')).toHaveClass('selected');
// });

// it('update genre after click ALL', async () =>{

//     const {container, getByText} = renderComponent('/filter=Action,Adventure');

//     await userEvent.click(getByText('ALL'));
//     expect(container.getElementsByClassName('selected').length).toBe(10);
// });

// it('deselect all after click ALL', async () =>{

//     const {container, getByText} = renderComponent('');

//     await userEvent.click(getByText('ALL'));
//     expect(container.getElementsByClassName('selected').length).toBe(0);
// });

// it('deselect genre after click', async () =>{

//     const {container, getByText} = renderComponent('/filter=Action,Adventure');

//     await userEvent.click(getByText('Action'));
//     expect(container.getElementsByClassName('selected').length).toBe(1);
//     expect(getByText('Adventure')).toHaveClass('selected');
// });

// it('select all after adding missing all', async () =>{

//     const {container, getByText} = renderComponent('/filter=Action,Adventure,Drama,Romance,Animation,Family,Comedy,Fantasy');
//     expect(container.getElementsByClassName('selected').length).toBe(8);
//     await userEvent.click(getByText('Science Fiction'));
//     expect(container.getElementsByClassName('selected').length).toBe(10);
// });