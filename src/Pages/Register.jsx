import React, { useEffect, useState } from 'react';
import FloatingLabelInput from '../Components/FloatingLabelInput';
import { IoEllipsisHorizontalCircleOutline, IoMan, IoWoman } from 'react-icons/io5';
import { pincodeDetails } from '../Utils/pincodeDetails';
import SelectInput from '../Components/SelectInput';
import user from '../Api/user';

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
        status: true,
        myClass: ''
    });
    const [loading, setLoading] = useState(false);
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

    const classes = [
        "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"
    ];

    useEffect(() => {
        (async () => {
            const { state, district } = await pincodeDetails(formData.pincode);
            console.log(state, district);
            setFormData((prevData) => ({
                ...prevData,
                state: state || '',
                city: district || ''
            }));
        })();
    }, [formData.pincode]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
            password: name === 'mobile' ? value : prevData.password
        }));
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

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "mySubjects") {
                // Append the entire array as JSON or serialize it to a string.
                formData.mySubjects.forEach(item => form.append("mySubjects[]", item));
            } else {
                form.append(key, formData[key]);
            }
        });
        const data = await user.register(form);
        if (data.success) {
            setFormData({
                name: '',
                mobile: '',
                email: '',
                profilePic: '',
                dob: '',
                password: '',
            });
            setLoading(false);
            alert(data.message);
        }
        else {
            setLoading(false);
            alert(data.message);
        }

    };

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-[#000] text-[#cbcbcb]'>
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={handleSubmit} className=" mx-auto p-8 bg-[#141414] shadow-md rounded-lg grid gap-4 grid-cols-3">
                <FloatingLabelInput label="Name" id="name" name="name" value={formData.name} onChange={handleChange} />
                <FloatingLabelInput label="Mobile" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
                <FloatingLabelInput label="Email" id="email" name="email" value={formData.email} onChange={handleChange} type='email' />
                <FloatingLabelInput label="Password" id="password" name="password" value={formData.password} onChange={handleChange} type='password' disabled={true} />
                <div className="mb-4">
                    <input type="file" name="profilePic" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <input type="date" name="dob" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>

                <div className="flex flex-row mb-4 justify-between grid-cols-3">
                    <div className={`flex flex-row items-center mr-4 border border-gray-300 rounded p-2 ${formData.gender === "male" ? 'bg-[#4560bd] text-white' : ''}`}>
                        <input type="radio" name="gender" value="male" id="male" onChange={handleChange} className="hidden" />
                        <label htmlFor="male" className="flex items-center cursor-pointer">
                            <IoMan className="mr-2" />
                            Male
                        </label>
                    </div>
                    <div className={`flex flex-row items-center mr-4 border border-gray-300 rounded p-2 ${formData.gender === "female" ? 'bg-[#4560bd] text-white' : ''}`}>
                        <input type="radio" name="gender" value="female" id="female" onChange={handleChange} className="hidden" />
                        <label htmlFor="female" className="flex items-center cursor-pointer">
                            <IoWoman className="mr-2" />
                            Female
                        </label>
                    </div>
                    <div className={`flex flex-row items-center mr-4 border border-gray-300 rounded p-2 ${formData.gender === "other" ? 'bg-[#4560bd] text-white' : ''}`}>
                        <input type="radio" name="gender" value="other" id="other" onChange={handleChange} className="hidden" />
                        <label htmlFor="other" className="flex items-center cursor-pointer">
                            <IoEllipsisHorizontalCircleOutline className="mr-2" />
                            Other
                        </label>
                    </div>
                </div>
                <SelectInput listArray={roles} handleChange={handleChange} name="role" label="Roles" />
                <SelectInput listArray={departments} handleChange={handleChange} name="department" label="Departments" />
                <SelectInput listArray={subjects} handleChange={handleSubjectsChange} name="mySubjects" label="Subjects" />
                <SelectInput listArray={classes} handleChange={handleChange} name="myClass" label="Class" />
                <FloatingLabelInput label="Address" id="address" name="address" value={formData.address} onChange={handleChange} />
                <FloatingLabelInput label="Pincode" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
                <FloatingLabelInput label="City" id="city" name="city" value={formData.city} disabled={true} onChange={handleChange} />
                <FloatingLabelInput label="State" id="state" name="state" value={formData.state} disabled={true} onChange={handleChange} />
                <FloatingLabelInput label="Country" id="country" name="country" value={formData.country} disabled={true} onChange={handleChange} />

                <button disabled={loading} type="submit" className="w-full p-2 bg-[#1e2338] text-[#7498e5] rounded hover:bg-[#4560bd] hover:text-[#fff] col-span-3">{loading?"Registering":"Register"}</button>
            </form>
        </div>
    );
};

export default Register;
