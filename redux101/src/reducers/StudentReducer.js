// Reducers are functions that return a piece of state

const students = [
    "Stanley",
    "Kyle",
    "Rob",
    "Greg",
    "JR",
    "Matt"
]

// All reducer functions have two parameters:
// 1. current state
// 1b. usually you will want to provide a default state
// 2. info that came from the action

export default function(state = students, action){
    if(action.type === 'ADD_STUDENT'){
        // this means i care about this action, update
        let newStudents = state.slice();
        newStudents.push(action.payload)
        return newStudents;
    } else{
        return state;
    }
}