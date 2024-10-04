import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBroswerRouter, RouterProvider} from 'react-router-dom'
import home from './View/Home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBroswerRouter([
    {
        path: "/",
        element: <home/>
    },
    {
        path: "/add",
        element: <add/>
    },
    {
        path: "/show",
        element: <home/>
    }
])
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
