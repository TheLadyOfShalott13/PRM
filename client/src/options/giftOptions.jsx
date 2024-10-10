import React from 'react'
import "../styles/tables.css"
import axios from 'axios';
import { faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Options = ({ id }) => {

    const trashClick = async () => {
        try {
            await axios.delete(
                `http://localhost:7700/api/gift/delete/${id}`,
                { withCredentials: false })
            window.location.reload();
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Link to={`/ViewGift/${id}`} state={{ "id":id }} >
                <FontAwesomeIcon className="tableOptions" icon={faEye} />
            </Link>
            <Link to="/EditGift" state={{ "id":id }} >
                <FontAwesomeIcon className="tableOptions" icon={faEdit} />
            </Link>
            <FontAwesomeIcon className="tableOptions" icon={faTrash} onClick={trashClick} />
        </div>
    )
}

export default Options;