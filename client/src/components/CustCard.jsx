// src/pages/CustCard.jsx

import React from 'react'
import "../styles/custCard.css"
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

const CustCard = ({ props }) => {

    const trashClick = async () => {
        try {
            await axios.delete(
                `http://localhost:7700/api/customers/${props._id}`,
                { withCredentials: false })
            window.location.reload();
        }
        catch (err) {
            console.log(err)
        }
    }
    
    const editClick = async () => {
        try {
            await axios.put(
                `http://localhost:7700/api/customers/${props._id}`,
                { withCredentials: false })
            window.location.reload();
        }
        catch (err) {
            console.log(err)
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'not started':
                return 'grey';
            case 'ongoing':
                return 'orange';
            case 'completed':
                return 'green';
            default:
                return 'purple';
        }
    };

    return (
        <div className='cust-card'>
            <div className="details">
                <div className="cust-name">
                    <h1>{props.name}</h1>
                    <div className="status"
                         style={{ 
                             backgroundColor: getStatusColor(props.status) 
                            }}>
                        {props.status}
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTrash} onClick={trashClick} />
                        <FontAwesomeIcon icon={faEdit} onClick={editClick} />
                    </div>
                </div>
                <div className='cust-details'>
                    <p><b>Service:</b>&nbsp;<span>{props.service}</span></p>
                    <p><b>Email:</b>&nbsp;<span>{props.email}</span></p>
                    <p><b>Phone Number:</b>&nbsp;<span>{props.phone}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CustCard
