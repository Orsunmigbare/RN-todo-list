import * as types from './types';
import {AsyncStorage} from 'react-native'

export const allSubtasks = (taskId) => async dispatch => {
  console.log('getting subtasks')
    dispatch({type: types.ALL_SUBTASKS})
    try{
        let tasks = await AsyncStorage.getItem('Tasks');
        tasks = JSON.parse(tasks)
        const task_index = tasks.findIndex(tsk => tsk.id === taskId)
        const task = tasks[task_index]
        const subtasks = task.subtasks;
        dispatch({type: types.ALL_SUBTASKS_SUCCESS, payload: subtasks})
    }catch(e){
        console.log(e)
        dispatch({type: types.ALL_SUBTASKS_FAILURE, payload: 'error getting subtasks'})
    }
}

export const createSubtask = ({taskId,title,completed,subtaskId}) => async dispatch => {
    try{
        let tasks = await AsyncStorage.getItem('Tasks');
        tasks = JSON.parse(tasks)
        const task_index = tasks.findIndex(tsk => tsk.id === taskId)
        let task = tasks[task_index];
        task.subtasks.push({title,completed,subtaskId})
        tasks.splice(task_index, 1, task)
        await AsyncStorage.setItem('Tasks',JSON.stringify(tasks))
        dispatch({type: types.CREATE_SUBTASK_SUCCESS, payload: task.subtasks})
    }catch(e){
        console.log(e)
        dispatch({type: types.CREATE_SUBTASKS_FAILURE, payload: 'error creating subtask'})
    }
}

export const deleteSubtask = ({taskId,subtaskId}) => async dispatch => {
    try {
        let tasks = await AsyncStorage.getItem('Tasks');
        tasks = JSON.parse(tasks)
        const task_index = tasks.findIndex(tsk => tsk.id === taskId);
        let task =  tasks[task_index];
        let subtask_index= task.sub_task.findIndex(sbtsk => sbtsk.id = subtaskId)
        task.subtasks.splice(subtask_index,1)
        tasks.splice(task_index, 1, tasks)
        await AsyncStorage.setItem('Tasks', JSON.stringify(tasks))
        dispatch({type: types.DELETE_SUBTASK_SUCCESS, payload: tasks.subtask})
    }catch(e){
        dispatch({type: types.DELETE_SUBTASKS_FAILURE, payload: 'error deleting subtask'})
    }
}

export const updateSubtask = ({taskId,subtaskId, completed}) =>async dispatch =>{
    console.log(taskId, subtaskId, completed)
 try{
    let tasks = await AsyncStorage.getItem('Tasks');
        tasks = JSON.parse(tasks)
        const task_index = tasks.findIndex(tsk => tsk.id === taskId);
        let task =  tasks[task_index];
        let subtask_index= task.subtasks.findIndex(sbtsk => sbtsk.subtaskId=== subtaskId)
        console.log(subtask_index)
        let subtask = task.subtasks[subtask_index]
        subtask.completed = completed;
        console.log(subtask)
        task.subtasks.splice(subtask_index, 1 ,subtask)
        tasks.splice(task_index, 1, task)
        await AsyncStorage.setItem('Tasks', JSON.stringify(tasks))
        console.log('updated -->', subtask)
        dispatch({type: types.DELETE_SUBTASK_SUCCESS, payload: task.subtasks})
 } catch(e){
     console.log(e)
    dispatch({type: types.UPDATE_SUBTASKS_FAILURE, payload: 'error upsa subtask'})
 }
}