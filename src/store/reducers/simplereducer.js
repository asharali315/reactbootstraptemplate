import {GENERALACTIONS} from "../actions/actions"

const initialState = {
    list : []
}

export const reducer = (state = initialState, action)=>{

switch(action.type){
    case GENERALACTIONS.CREATE:
        return {
            ...state,
            list : [...state.list,action.payload]
        }

    case GENERALACTIONS.FETCH_ALL:
        return {
            ...state,
            list: [...action.payload]
        }    

    case GENERALACTIONS.DELETE:
        return {
            ...state,
            list: state.list.filter(i=>i.id !== action.payload)
        }

    default : 
    return initialState;
}

}