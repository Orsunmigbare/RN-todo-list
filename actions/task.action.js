import * as types from './types';
import {AsyncStorage} from 'react-native'

export const allTasks =  () => async dispatch =>{
    dispatch({type: types.ALL_TASKS})
    try {
        let tasks = await AsyncStorage.getItem('Tasks');
        tasks = JSON.parse(tasks)
        dispatch({type: types.ALL_TASKS_SUCCESS, payload : tasks || []})
    }catch(e){
        console.log(e)
        dispatch({type: types.ALL_TASKS_FAILURE, payload: 'error fetching tasks'})
    }
}

export const createTask =  ({title,id,completed}) =>async  dispatch => {
    dispatch({type: types.CREATE_TASK})
    try {
        let tasks =  await AsyncStorage.getItem('Tasks')
        tasks = JSON.parse(tasks) || []
        tasks.push({title,id, completed: false, progress: 0, subtasks : []})
        await AsyncStorage.setItem('Tasks', JSON.stringify(tasks))
        dispatch({type: types.CREATE_TASK_SUCCESS, payload: tasks})
     }catch(e){
         console.log('error -->', e)
         dispatch({type: types.CREATE_TASK_FAILURE, payload: 'error creating tasks'})
     }
}

export const updateTask =  ({type,id,completed}) => async dispatch => {
    dispatch({type: types.TASK_UPDATE})
    try {
        let tasks =  await AsyncStorage.getItem('Tasks')
        tasks = JSON.parse(tasks)
       const task_index= tasks.findIndex(task => task.id === id)
        task = task[task_index]
        tasks.completed = completed
        tasks.splice(task_index, 1, task)
        await AsyncStorage.setItem('Tasks', tasks)
        dispatch({type: types.TASK_UPADATE_SUCCESS, payload: tasks})
    }catch(e){
        dispatch({type: types.TASK_UPDDATE_FAILURE, payload: 'error updating tasks'})
    }
}

export const deleteTask = async ({id}) =>async dispatch => {
    dispatch({type: types.DELETE_TASK })
    try {
        let tasks = await AsyncStorage.getItem('Tasks')
        tasks = JSON.parse(tasks)
        const task_index = tasks.findIndex(task => task.id === id)
        tasks.splice(task_index,1)
        await AsyncStorage.setItem('Tasks', tasks)
        dispatch({type: types.DELETE_TASK_SUCCESS, payload: tasks})
    }catch(e){
        dispatch({type: types.DELETE_TASK_FAILURE, payload: 'error deleting tasks'})
    }   
}