import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import the store from redux so we can use it! the store IS redux!
import { createStore } from 'redux';

// import the provider component from react-redux so that react and
// redux can talk! they talk through 'connect', but the provider 
// component makes that happen!
import { Provider } from 'react-redux';

// we need a master/root reducer to give to the store
import reducers from './reducers/index';

// make a store for redux to use! pass it reducers, which is the export 
// of the root reducer file. the root reducer is just all of the little
// reducers' returns
const theStore = createStore(reducers);

// Provider is the component that makes connect work. (connect is inside the containers)
// it takes a propr of store, which is the redux store. the redux store was made my 
// createStore and giving it the rootReducer

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
    document.getElementById('root'));

