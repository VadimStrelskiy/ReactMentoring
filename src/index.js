import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './Components/App';

render(<App />, document.getElementById('root'));

const hello = React.createElement('h1', null, "Hello React!");
ReactDOM.render(hello, document.getElementById('hello-container'));
