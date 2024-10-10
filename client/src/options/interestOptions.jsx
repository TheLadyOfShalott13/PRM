import React from 'react'
import "../styles/tables.css"
import axios from 'axios';
import { faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Options = ({ id }) => {

    const trashClick = async () => {
        try {
            await axios.delete(
                `http://localhost:7700/api/interest/delete/${id}`,
                { withCredentials: false })
            window.location.reload();
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Link to={`/ViewInterest/${id}`} >
                <FontAwesomeIcon className="tableOptions" icon={faEye} />
            </Link>
            <Link to={`/EditInterest/${id}`} >
                <FontAwesomeIcon className="tableOptions" icon={faEdit} />
            </Link>
            <FontAwesomeIcon className="tableOptions" icon={faTrash} onClick={trashClick} />
        </div>
    )
}

export default Options;