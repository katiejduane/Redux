// In order to wire up a redux React app we need the following:
// 1. Provider component. THis comes from react-redux
// 2. createStore. This comes from redux.
// 3. reducers to give to createStore
// 4. Make a single rootReducer (3) to import our individual reducers
// 5. Make at least one indidivual reducer to import into root (4)
// 6. Create theStore (2) with the reducers (3 -> 4 -> 5)
// 7. Put the Provider Component (1) with a prop of store with the store (6) around <App />
// 8. If we need redux middleware, we need to import it from redux (applyMiddleWare)
// 9. import redux-promise so that if an action needs to return a promise/async
// the middleware will tell REdux to sha-lax... I'm coming.
// 10. When we make the store, kind of like connect, we apply middleware first
// then, we hand it the createStore

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'; // STEP 1
import { createStore, applyMiddleware } from 'redux'; // STEP 2, Step 8
import reducers from './reducers/index'; // STEPS 3, 4, 5 {INDEX in reducers folder is the ROOT reducer}
import reduxPromise from 'redux-promise'; // Step 9

// const theStore = createStore(reducers); // STEP 6

const theStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore)(reducers);

// const middleware = applyMiddleware(reduxPromise);
// const theStore = middleware(createStore)
// const theStoreWithMiddleWare = theStore(reducers)
// the above three lines do what the crazy chained function call does but looks more clear

ReactDOM.render(
    <Provider store={theStoreWithMiddleWare}>
        <App />
    </Provider>,
            document.getElementById('root'));


