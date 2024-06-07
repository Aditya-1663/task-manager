import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleComplete } from '../store/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  const handleEditSave = () => {
    dispatch(editTask({ index: editingIndex, text: editingText }));
    setEditingIndex(null);
    setEditingText('');
  };

  const handleToggleComplete = (index) => {
    dispatch(toggleComplete(index));
  };

  return (
    <>
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {editingIndex === index ? (
            <>
              <input
                type="text"
                className="form-control"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button className="btn btn-success" onClick={handleEditSave}>Save</button>
            </>
          ) : (
            <>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <div>
                <button className="btn btn-secondary mr-2 mx-2" onClick={() => handleToggleComplete(index)}>
                  {task.completed ? 'Unmark' : 'Complete'}
                </button>
                <button className="btn btn-warning mr-2 mx-2" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn btn-danger mx-2" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul></>
  );
};

export default TaskList;
