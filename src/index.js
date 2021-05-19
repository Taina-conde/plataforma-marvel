import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './utils/assets/fonts/MarvelRegular-Dj83.ttf';
//import './utils/assets/fonts/Axiforma';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers'
import middleware from './redux/middleware'

const store = createStore(reducer, middleware)


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
document.body.style = 'background: black;';

