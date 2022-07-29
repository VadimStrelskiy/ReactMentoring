import { RouterContext } from "next/dist/shared/lib/router-context";
import {store} from '../src/Store/movieReducer';
import {Provider} from 'react-redux';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  backgrounds: {
    default: 'dark'
  }
}

export const decorators = [(Story) =>
<Provider store={store()}>
  <Story />
</Provider>]