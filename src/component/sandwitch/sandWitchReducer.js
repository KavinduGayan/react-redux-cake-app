

const initialState = {
    noOfSandwitches: 5
}

const sandwitchReducer= (state=initialState,action) => {
    if (state.noOfSandwitches===0) {
        return state
    }
    switch(action.type) {
        case "BUY_SANDWITCH": 
            return {
                ...state,
                noOfSandwitches: state.noOfSandwitches -1
            }
            default: return state
    }
}

export default sandwitchReducer