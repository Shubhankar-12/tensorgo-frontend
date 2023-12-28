import UpdateForm from '../form/UpdateForm'
import './modal.styles.css'
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ details, closeModal, updateUser }) => {
    return (
        <div className='modal'>
            <IoCloseSharp className='close-btn' onClick={() => closeModal()} />
            <UpdateForm details={details} closeModal={closeModal} updateUser={updateUser} />
        </div>
    )
}

export default Modal