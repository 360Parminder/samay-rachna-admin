import React from 'react';

const SelectInput = ({ listArray, handleChange,label,name }) => {
    return (
        <div className="mb-4">
            
            <select
                name={name}
                id={name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-xl bg-transparent outline-none focus:border-indigo-400 peer"
            >
                <option value="" disabled selected>
                    Select {label}
                </option>
                {listArray.map((values, index) => (
                  
                    <option key={index} value={values.toLowerCase()}>
                        {values}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;