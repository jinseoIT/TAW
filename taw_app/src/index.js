import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './redux/rootReducer';

const createStoreWidthMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWidthMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// 9.6 리액트 라우터 기본 셋팅
// 1. 설치 :npm install react-router-dom 
// 2. BrowerRouter 추가 : import { BrowserRouter } from 'react-router-dom';