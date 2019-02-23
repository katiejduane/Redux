// THIS IS OUR MASTER REDUCER
// THIS IS OUR STATE
// IT IMPORTS ALL OF THE LITTLE REDUCERS

// MASTER REDUCER MANIFESTO:
// I, the master reducer, neither know nor give a rip about React.
// I am like LIchtenstein, independent of your silly empires.
// I only care about Redux.

import { combineReducers } from 'redux';

// So we need a reducer to give to the master reducer

import StudentReducer from './StudentReducer';

// WE ARE NOW GOING TO BUILD THE ROOT REDUICER WITH 'combineReducers'
// combineReducers takes 1 arg: an object
// properties of whatever the state should be called
// value of the reducer

const rootReducer = combineReducers({
    students: StudentReducer
})

export default rootReducer;