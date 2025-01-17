import { act } from "react";
import { INCREMENT,DECREMENT } from "./action";

//initial state

const initialState ={
    count : 0
}

// reducer function 

const counterReducer = (state= initialState, action) =>
    {
        switch(action.type)
        {
            case INCREMENT:
                return{
                    ...state,
                    count: state.count+1
                };
            case DECREMENT:
                return {
                    ...state,
                    count: state.count-1
                };
            default:
                return state;
        }
    };
    export default counterReducer;