import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// 9.6 리액트 라우터 기본 셋팅
// 1. 설치 :npm install react-router-dom 
// 2. BrowerRouter 추가 : import { BrowserRouter } from 'react-router-dom';