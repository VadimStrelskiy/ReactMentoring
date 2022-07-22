import {createRoot} from 'react-dom/client';
import {App} from '../Components/App';
import {Provider} from 'react-redux';
import {store} from '../Store/movieReducer';
import React from 'react';

const index = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default index;