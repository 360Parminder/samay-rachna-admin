import React, { useState } from 'react';
import FloatingLabelInput from '../Components/FloatingLabelInput';
import { IoEllipseOutline, IoEllipsisHorizontalCircleOutline, IoMan, IoWoman } from 'react-icons/io5';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        profilePic: '',
        dob: '',
        password: '',
        gender: '',
        role: '',
        department: '',
        mySubjects: [],
        address: '',
        city: '',
        pincode: '',
        state: '',
        country: 'India',
        status: 'disable',
        myClass: ''
    });
    const roles = [
        "Teacher",
        "Head of Department",
        "Principal/Headmaster",
        "Vice-Principal",
        "Dean",
        "Registrar",
        "Sports Coach",
        "Counselor",
        "Librarian",
        "Lab Instructor",
        "IT Support Staff",
        "Technician",
    ];

    const departments = [
        "Science",
        "Mathematics",
        "Arts and Humanities",
        "History",
        "Geography",
        "Political Science",
        "Commerce",
        "Engineering and Technology",
        "Medical Sciences",
        "Law",
        "Education",
        "Management",
        "Physical Education/Sports",
        "Music and Performing Arts",
        "Library",
        "Information Technology",
        "Health and Wellness",
    ];
    const subjects = [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "History",
        "Geography",
        "English",
        "Economics",
        "Computer Science",
        "Physical Education",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubjectsChange = (e) => {
        const { options } = e.target;
        const selectedSubjects = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedSubjects.push(options[i].value);
            }
        }
        setFormData({
            ...formData,
            mySubjects: selectedSubjects
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-[#000] text-[#cbcbcb]'>
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={handleSubmit} className=" mx-auto p-8 bg-[#141414] shadow-md rounded-lg grid gap-4 grid-cols-3">
                <FloatingLabelInput label="Name" id="name" name="name" onChange={handleChange} />
                <FloatingLabelInput label="Mobile" id="mobile" name="mobile" onChange={handleChange} />
                <FloatingLabelInput label="Email" id="email" name="email" onChange={handleChange} type='email' />
                <FloatingLabelInput label="Password" id="password" name="password" onChange={handleChange} type='password' />
                <div className="mb-4">
                    <input type="file" name="profilePic" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <input type="date" name="dob" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>

                <div className="flex flex-row mb-4 justify-between grid-cols-3">
                    <div className={`flex flex-row items-center mr-4 border border-gray-300 rounded p-2 ${formData.gender == "male" ? 'bg-blue-500 text-white' : ''}`}>
                        <input type="radio" name="gender" value="male" id="male" onChange={handleChange} className="hidden" />
                        <label htmlFor="male" className="flex items-center cursor-pointer">
                            <IoMan className="mr-2" />
                            Male
                        </label>
                    </div>
                    <div className={`flex flex-row items-center mr-4 border border-gray-300 rounded p-2 ${formData.gender == "female" ? 'bg-blue-500 text-white' : ''}`}>
                        <input type="radio" name="gender" value="female" id="female" onChange={handleChange} className="hidden" />
                        <label htmlFor="female" className="flex items-center cursor-pointer">
                            <IoWoman className="mr-2" />
                            Female
                        </label>
                    </div>
                    <div className={`flex flex-row items-center mr-4 border border-gray-300 rounded p-2 ${formData.gender == "other" ? 'bg-blue-500 text-white' : ''}`}>
                        <input type="radio" name="gender" value="other" id="other" onChange={handleChange} className="hidden" />
                        <label htmlFor="other" className="flex items-center cursor-pointer">
                            <IoEllipsisHorizontalCircleOutline className="mr-2" />
                            Other
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                <select
                    name="role"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="" disabled selected>
                        Select a role
                    </option>
                    {roles.map((role, index) => (
                        <option key={index} value={role.toLowerCase()}>
                            {role}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <select
                    name="department"
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="" disabled selected>
                        Select a department
                    </option>
                    {departments.map((department, index) => (
                        <option key={index} value={department.toLowerCase()}>
                            {department}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <select
                    // multiple
                    name="mySubjects"
                    onChange={handleSubjectsChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    {subjects.map((subject, index) => (
                        <option key={index} value={subject.toLowerCase()}>
                            {subject}
                        </option>
                    ))}
                </select>
            </div>
                {/* <div className="mb-4">
                    <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div> */}
                 <FloatingLabelInput label="Address" id="address" name="address" onChange={handleChange} />

                {/* <div className="mb-4">
                    <input type="text" name="city" placeholder="City" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div> */}
                <FloatingLabelInput label="City" id="city" name="city" onChange={handleChange} />
                {/* <div className="mb-4">
                    <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div> */}
                <FloatingLabelInput label="Pincode" id="pincode" name="pincode" onChange={handleChange} />
                <div className="mb-4">
                    <select name="state" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
                        <option value="">Select State</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                        <option value="state3">State 3</option>
                    </select>
                </div>
                
                <div className="mb-4">
                    <select name="country" value="India" disabled className="w-full p-2 border border-gray-300 rounded">
                        <option value="India">India</option>
                    </select>
                </div>
                <div className="mb-4">
                    <select name="myClass" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
                        <option value="">Select Class</option>
                        <option value="class1">Class 1</option>
                        <option value="class2">Class 2</option>
                        <option value="class3">Class 3</option>
                    </select>
                </div>
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-3">Register</button>
            </form>
        </div>
    );
};

export default Register;