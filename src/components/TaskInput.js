import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask({ text: input, completed: false }));
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className=" body mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="btn btn-primary mt-2" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
