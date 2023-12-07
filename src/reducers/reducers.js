import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../actions/actiontypes";

// reducers.js
const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

console.log("JSON===", typeof JSON.parse(localStorage.getItem('tasks')))
console.log("JSON===", typeof JSON.stringify(localStorage.getItem('tasks')))

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newStateAdd = [...state, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newStateAdd));
      return newStateAdd;

    case EDIT_TASK:
      const newStateEdit = state.map(task =>
        task.id === action.payload.taskId ? action.payload.updatedTask : task
      );
      localStorage.setItem('tasks', JSON.stringify(newStateEdit));
      return newStateEdit;

    case DELETE_TASK:
      const newStateDelete = state.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(newStateDelete));
      return newStateDelete;

    default:
      return state;
  }
};
