import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Menu } from './menu/Menu';
import * as serviceWorker from './serviceWorker';
import { Course } from './course/Course';

ReactDOM.render(<Course />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
