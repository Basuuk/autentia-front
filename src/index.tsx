import React from 'react';
import ReactDOM from 'react-dom';
import { Course } from './course/Course';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Course />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
