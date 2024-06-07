import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
