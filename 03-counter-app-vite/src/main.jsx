import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App, } from './HelloWorldApp';
//import { FirstApp } from './FirstApp';
//import Student from './Student';
import CounterApp from './CounterApp';
import './styles.css';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={0}/> */}
        {<FirstApp/>}
    </React.StrictMode>
);
