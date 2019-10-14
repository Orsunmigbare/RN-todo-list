import { combineReducers } from 'redux';

import  subtask from './subtask.reducer';
import task from './task.reducer';

const rootReducer = combineReducers({
    subtask,
    task
})

export default rootReducer