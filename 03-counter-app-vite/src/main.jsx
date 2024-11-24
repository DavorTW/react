import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App, } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import Student from './Student';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Student name='Davor' age={26} isStudent={true}/>
        <Student name='John' age={32} isStudent={false}/>
        <Student/>
    </React.StrictMode>
)
