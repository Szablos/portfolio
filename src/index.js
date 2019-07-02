import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));

serviceWorker.unregister();
