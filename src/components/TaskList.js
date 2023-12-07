// TaskList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../actions/actions';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  const [editedTask, setEditedTask] = useState({ id: null, title: '', description: '' });

  const handleEdit = (task) => {
    setEditedTask({ id: task.id, title: task.title, description: task.description });
  };

  const handleSaveEdit = () => {
    editTask(editedTask.id, editedTask);
    setEditedTask({ id: null, title: '', description: '' });
  };

  const containerStyle = {
    background: tasks.length > 0 ? 'black' : 'transparent',
    color: 'white',
    marginTop: '50px',
    width: '40%',
    borderRadius: '10px',
    padding: '10px',
    paddingTop: '5px',
    margin: '0 auto', // Center the container horizontally
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <div className='flex items-center flex-col justify-center'>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col mb-3 items-center'>
                  <span className='font-bold text-3xl'>{task.title}</span>
                  <span className='text-xs'>{task.description}</span>
                </div>
                <div className='flex gap-5 mb-2'>
                  <button className='border-2 border-[#282c34] p-2 px-3 rounded-full text-white' onClick={() => handleEdit(task)}>Edit</button>
                  <button className='border-2 border-[#282c34] p-2 px-3 rounded-full text-white' onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>

        {/* Edit Task Form or Modal */}
        {editedTask.id !== null && (
          <div className='flex items-center flex-col mt-4'>
            <input
              type="text"
              placeholder="Task title"
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
              className='border-2 border-[#282c34] mb-5 pr-20 text-black'

            />
            <textarea
              placeholder="Task description"
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
              className='border-2 border-[#282c34] mb-5 pr-20 text-black'

            />
            <button className='border-2 border-[#282c34] p-2 px-3 rounded-full text-white' onClick={handleSaveEdit}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { deleteTask, editTask })(TaskList);
