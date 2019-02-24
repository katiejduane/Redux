// This is a reducer.
// To make a reducer:
// 1. make a function that has 2 params:
//     - state (usually set a default)
//     - action
// 2. The state param contains THIS reducer's state. Just like a variable.
// 3. The action param will contain whatever the object the dispatched action sent us
//     - type (REQUIRED)
//     - payload (data/JSON/stuff)
// 4. Check the action.type to see if I care.
// 4a. If I care, return some new state
// 4b. If I don't care, return state (old state)

function rhymeReducer(state = null, action) {
    switch (action.type) {
        case "GET_RHYMES":
            console.log(action)
            return action.payload.data;
        case "CLEAR_RHYMES":
            return null;
        default:
            return state;
    }

}

export default rhymeReducer