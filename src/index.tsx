import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CarPhoto from './components/CarPhoto/CarPhoto';
import 'the-new-css-reset';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import { BlockMenu } from './components/Header/Header.styled';
import reportWebVitals from './reportWebVitals';
import { CarData, CarError } from './components/CarPhoto/FormIClass';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CarPhoto 
    _id={'main'}
    _width_photo={350}
    _height_photo={300}
    _car={new CarData()}
    _error={new CarError()}
    />
    <MainPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
