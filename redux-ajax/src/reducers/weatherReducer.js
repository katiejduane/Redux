

function weatherReducer(state = null, action) {
    switch (action.type) {
        case "GET_WEATHER":
        // console.log(action)
            return action.payload.data;
        case "CLEAR_WEATHER":
            return null;
        default:
            return state;
    }

}

export default weatherReducer