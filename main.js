import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import { saveState } from './localStorage';

const app = document.getElementById('app');
// store.subscribe(_.throttle(()=>{
//     saveState(store.getState());
// },1000))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>, app);