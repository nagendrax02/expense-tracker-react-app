import { SET_EXPENSES } from "..";

export const expensesReducer =(state = {expenses:[]}, action)=>{
    switch(action.type){
        case SET_EXPENSES:{
            return {...state, expense:action.payload }
        }

        default : return state
    }
}