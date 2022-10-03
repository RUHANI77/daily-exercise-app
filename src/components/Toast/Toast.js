import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './Toast.css';

const Toast = () => {
    const notify = () => toast("Congratulations! You Have Completed your task!");
    return (
        <div>
            <button onClick={notify} className='activity-btn'>Activity Completed!</button>
            <ToastContainer/>
        </div>

    );
};

export default Toast;