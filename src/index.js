import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import Bootstrap from 'bootstrap\dist\css\bootstrap.min.css';
import Nav from './routes/route.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();
