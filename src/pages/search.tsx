import {App} from '../Components/App';
import {Provider} from 'react-redux';
import { wrapper, getMovies, useAppDispatch } from '../Store/movieReducer';

import React from 'react';

const index = () => {
    const dispatch = useAppDispatch();

    return(<App />)
};

index.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
      async () => {
        await dispatch(getMovies({searchQuery: '', searchParams: ''}));
      }
  );

export default index;