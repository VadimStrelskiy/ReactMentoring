import type { AppProps } from 'next/app';
import { wrapper } from '../Store/movieReducer';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);