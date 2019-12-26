import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import {createStore} from "redux";
import {Provider} from 'react-redux';
import storeReducer from "./reducers";


// Imposto lo store di default
let defaultStore = {
	movieLibrary: []
};

// Se ho lo store salvato nel localstorage, lo recupero e sovrascrivo il defaultStore
if (localStorage.getItem('reduxStore')) {
	defaultStore = JSON.parse(localStorage.getItem('reduxStore'));
}

const store = createStore(storeReducer, defaultStore);

// Quando cambia lo store, salvo nella localstorage
store.subscribe(() => {
	const currentState = JSON.stringify(store.getState());
	localStorage.setItem('reduxStore', currentState);
});


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
