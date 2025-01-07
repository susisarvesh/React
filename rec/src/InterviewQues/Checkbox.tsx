import React, { useState } from 'react';

const details = {
  name: 'Sarvesh',
  age: 21,
  current: 'Unemployed',
  skills: 'Quick Learner',
};

const Checkboxex = ({ value, action }) => {
  return (
    <div className="flex items-center justify-center my-4">
      <input
        type="checkbox"
        checked={value}
        onClick={action}
        className="w-8 h-8 cursor-pointer accent-blue-600"
      />
      <label className="ml-2 text-lg text-gray-700">Show Details</label>
    </div>
  );
};

const Show = () => {
  return (
    <div className="p-4 mx-auto mt-4 text-white bg-blue-600 rounded-lg shadow-md ">
      <div className="text-lg font-bold">Name: {details.name}</div>
      <div>Age: {details.age}</div>
      <div>Status: {details.current}</div>
      <div>Skills: {details.skills}</div>
    </div>
  );
};

function Checkbox() {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Checkboxex value={checked} action={handleChecked} />
      {checked && <Show />}
    </div>
  );
}

export default Checkbox;
