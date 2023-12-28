import { FaCircle } from "react-icons/fa";
import './userCard.styles.css';
import { useState } from "react";
import Modal from "../Modal/Modal";
const UserCard = ({ initialUserDetail }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [userDetail, setUserDetail] = useState(initialUserDetail);

    const handleUpdateClick = () => {
        setIsEditing(true);
    }
    const closeModal = () => {
        setIsEditing(false);
    }
    const handleUpdateUser = (details) => {
        setUserDetail(details);
    }
    return (
        <>
            {isEditing && <Modal details={userDetail} closeModal={closeModal} updateUser={handleUpdateUser} />}
            <tr>
                <td className="status">
                    <span>
                        <FaCircle style={userDetail.status === "active" ? { color: 'green' } : { color: "grey" }} />
                    </span>
                    <span>{userDetail.status}</span>
                </td>
                <td>{userDetail.name}</td>
                <td>{userDetail.email}</td>
                <td>{userDetail.gender}</td>
                <td>
                    <button className="btn update-btn" onClick={handleUpdateClick}>update</button>
                </td>
            </tr>
        </>
    )
}

export default UserCard