import { BUY_CAKE } from './cakeTypes'
const initialState = {
    noOfCakes: 10,
}

const cakeReducer = (state=initialState,action) => {
    if (state.noOfCakes<=0) {  
        return state    
    }
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer