import { BUY_CAKE } from "./cakeTypes";

// InitialState decalaration
const initialState = {
    numOfCakes : 10
}

// Reducer Function 
const cakeReducer = (state = initialState,actions) => {
    switch(actions.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            };
        default:
            return state;
    }
}

export default cakeReducer;