import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../userCard/UserCard';
import './UserList.styles.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8800/api/users')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div className="table-wrapper">
            <table class="fl-table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserCard key={user.id} initialUserDetail={user} />
                    ))}
                </tbody>
            </table>
        </div>
        // <div>
        //     <h2>User List</h2>
        //     <ul>

        //     </ul>
        // </div>
    );
};

export default UserList;
