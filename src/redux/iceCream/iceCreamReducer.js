import { BUY_ICE_CREAM } from "./iceCreamactionType";


const initialState = {
    numOfIceCream : 10
};

const iceCreamReducer = (state = initialState,actions) =>{
    switch(actions.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state;
    }
};

export default iceCreamReducer;
