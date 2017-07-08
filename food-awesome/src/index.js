import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { getRestaurant } from './Actions/Admin/Restaurant';

// Redux
import { Provider } from 'react-redux';   // yarn add react-redux
import { initStore } from './Store/Store';  //calling initStore function from Store file, already have createStore inside
//API
import {setAdmin, getAdmin} from './API/AdminAPI';

const store = initStore();

store.subscribe( () => {
  const state = store.getState();
  setAdmin(state.admin);
})

store.dispatch(getRestaurant())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
