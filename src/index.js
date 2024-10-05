import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from './View/Home/home';
import Add from './View/Add/add'
import Show from './View/Show/show'


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/add",
        element: <Add/>
    },
    {
        path: "/show",
        element: <Show/>
    }, {
        path: "*",
        element: <h1 className='not'>404 Not Found</h1>
    }
])
root.render(
    <div>
    
    <RouterProvider router={router}/>
    <Toaster/>
    </div>
);
//  1 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
