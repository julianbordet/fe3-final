import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import GlobalContext from './Components/utils/global.context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContext>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </GlobalContext>
);


