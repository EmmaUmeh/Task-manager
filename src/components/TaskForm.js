// TaskForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now() });
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className=''>
        <div className='flex flex-col items-center justify-center'>
             <h1 className='mb-3 font-bold text-2xl'>Task Manager</h1>
                <input
                type="text"
                placeholder="Task title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                className='border-2 border-[#282c34] mb-5 pr-20'
            />
            <textarea
                placeholder="Task description"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                className='border-2 border-[#282c34] mb-5 pr-20'
            />
            <button type="submit" className='border-2 border-[#282c34] bg-black p-2 px-3 rounded-full text-white'>Add Task</button>
        </div>
    </form>
  );
};

export default connect(null, { addTask })(TaskForm);
