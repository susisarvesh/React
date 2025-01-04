import React, { useState } from 'react';
import { useTask } from './store/store';

function AddTask() {
  const { addtask } = useTask();
  const { tasks } = useTask();

  const [value, setValue] = useState({
    id: '',
    task: '',
    description: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (!value.task.trim()) {
      alert('Task name is required!');
      return;
      } 
    addtask({ ...value, id: Date.now().toString() });
    setValue({ id: '', task: '', description: '', status: '' }); 
  };

  return (
      <>
<h3 className="text-[30px] font-thin mb-10 mt-10">TaskMaster Lite: [useState, TypeScript , Zustand , store , State Management , Custom Hook ]</h3>

      <div className="max-w-lg p-6 mx-auto bg-gray-100 rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-bold">Add a New Task</h2>

        <div className="mb-4">
          <input
            type="text"
            name="task"
            placeholder="Enter task"
            value={value.task}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            value={value.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="status"
            placeholder="Enter status"
            value={value.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleAdd}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-white border border-gray-300 rounded-lg shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold">{task.task}</h3>
            <p className="text-gray-600">
              <strong>Description:</strong> {task.description}
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong> {task.status}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddTask;
