import { useState } from 'react';
import './updateForm.styles.css';
import axios from 'axios';

const UpdateForm = ({ details, closeModal, updateUser }) => {
    const [updatedDetails, setUpdatedDetails] = useState({
        name: details.name,
        email: details.email,
        gender: details.gender,
        status: details.status,
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedDetails((prevDetails) => ({ ...prevDetails, [name]: value }));


    };
    const handleSaveClick = async () => {
        try {
            const updatedUser = await axios.put(`http://localhost:8800/api/users/${details.id}?name=${updatedDetails.name}&email=${updatedDetails.email}&status=${updatedDetails.status}&gender=${updatedDetails.gender}`);
            console.log('User updated successfully', updatedUser);
            updateUser(updatedUser.data);
            closeModal();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="form">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                value={updatedDetails.name}
                onChange={handleInputChange}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                id="email"
                value={updatedDetails.email}
                onChange={handleInputChange}
            />
            <label htmlFor="gender">Gender:</label>
            <select
                name="gender"
                id="gender"
                value={updatedDetails.gender}
                onChange={handleInputChange}
            >
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label htmlFor="status">Status:</label>
            <select
                name="status"
                id="status"
                value={updatedDetails.status}
                onChange={handleInputChange}
            >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
}

export default UpdateForm