import {createRoot} from 'react-dom/client';
import {App} from './Components/App';
import { Provider } from 'react-redux';
import {store} from './Store/store';

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
