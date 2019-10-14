import * as types from '../actions/types'

const INITIAL_STATE = {
   subtasks : [],
   message : ''
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case  types.ALL_SUBTASKS :
            return {...state}
        case types.ALL_SUBTASKS_SUCCESS :
                return {subtasks: action.payload}
        case types.ALL_SUBTASKS_FAILURE : 
            return {...state, ...action.payload}


        case  types.CREATE_SUBTASK :
            return {...state}
        case types.CREATE_SUBTASK_SUCCESS :
                return {subtasks: action.payload}
        case types.CREATE_SUBTASK_FAILURE : 
            return {...state, ...action.payload}
        
        case  types.SUBTASK_UPDATE :
                return {...state}
        case types.SUBTASK_UPDATE_SUCCESS :
                return {subtasks: action.payload}
        case types.SUBTASK_UPDATE_FAILURE : 
                return {...state, ...action.payload}

        case  types.DELETE_SUBTASK :
                return {...state}
        case types.DELETE_SUBTASK_SUCCESS:
                return {subtasks: action.payload}
        case types.DELETE_SUBTASK_FAILURE : 
                return {...state, ...action.payload}
        default :
        return state;
        
    }
}