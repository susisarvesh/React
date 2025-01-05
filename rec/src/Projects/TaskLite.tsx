// src/components/TaskManager.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, updateTaskStatus, setFilter } from './layout/Slice';

const TaskManager = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask({ title: taskTitle }));
      setTaskTitle('');
    }
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleUpdateStatus = (id, status) => {
    dispatch(updateTaskStatus({ id, status }));
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'all' ? true : task.status === filter
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      
      <div className="mb-4">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
          className="border p-2 w-full rounded-md"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Add Task
        </button>
      </div>

      <div className="mb-4">
        <span className="font-medium">Filter: </span>
        {['all', 'todo', 'inprogress', 'done'].map((status) => (
          <button
            key={status}
            onClick={() => dispatch(setFilter(status))}
            className={`px-3 py-1 rounded-md mx-1 ${
              filter === status ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li key={task.id} className="border p-2 rounded-md flex justify-between items-center">
            <span>{task.title}</span>
            <div className="space-x-2">
              {['todo', 'inprogress', 'done'].map((status) => (
                <button
                  key={status}
                  onClick={() => handleUpdateStatus(task.id, status)}
                  className={`px-2 py-1 rounded-md ${
                    task.status === status ? 'bg-green-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {status}
                </button>
              ))}
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="px-2 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
