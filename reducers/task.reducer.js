import * as types from '../actions/types'

const INITIAL_STATE = {
   tasks : [],
   message : ''
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case  types.ALL_TASKS :
            return {...state}
        case types.ALL_TASKS_SUCCESS :
                return {tasks: action.payload}
        case types.ALL_TASKS_FAILURE :
            return {...state, ...action.payload}
        case  types.CREATE_TASK :
            return {...state}
        case types.CREATE_TASK_SUCCESS :
                return {tasks: action.payload}
        case types.CREATE_TASK_FAILURE : 
            return {...state, ...action.payload}
        
        case  types.TASK_UPDATE :
                return {...state}
        case types.TASK_UPDATE_SUCCESS :
                return {tasks: action.payload}
        case types.TASK_UPDATE_FAILURE : 
                return {...state, ...action.payload}

        case  types.DELETE_TASK :
                return {...state}
        case types.DELETE_TASK_SUCCESS:
                return { ...state, ...action.payload}
        case types.DELETE_TASK_FAILURE : 
                return {...state, ...action.payload}
        default :
                return state
        
    }
}