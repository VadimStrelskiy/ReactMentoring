import {App} from '../../Components/App';
import { wrapper, getMovies, getMovie, resetMovie } from '../../Store/movieReducer';
import { stringUtil } from '../../Utils/stringUtil';
const index = () => {
    return(<App />)
};

index.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
      async (context) => {
        const params = stringUtil.createQueryParamString(context.query, null, false);
        await dispatch(getMovies({searchQuery: context.query.searchQuery as string, searchParams: params}));
        if(context.query.movie){
          await dispatch(getMovie(context.query.movie as string));
        }
        else{
          dispatch(resetMovie());
        }
      }
  );

export default index;