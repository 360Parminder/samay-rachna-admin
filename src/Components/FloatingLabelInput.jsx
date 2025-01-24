import React from 'react';

const FloatingLabelInput = ({ label, id, type = 'text', onChange, ...props }) => {
  return (
    <div className="relative w-full my-4">
      <input
        type={type}
        id={id}
        required
        onChange={onChange}
        name={id}
        className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-full bg-transparent outline-none focus:border-indigo-400 peer"
        {...props}

      />
      <label
        htmlFor={id}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 px-2 text-sm text-gray-500 bg-[#141414] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:px-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-20%] peer-focus:px-1.5 peer-focus:text-indigo-500"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
