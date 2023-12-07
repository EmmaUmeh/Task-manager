// actions.js

import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actiontypes";


export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
  });
  
  export const editTask = (taskId, updatedTask) => ({
    type: EDIT_TASK,
    payload: { taskId, updatedTask },
  });
  
  export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
  });