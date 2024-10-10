import React, { useContext, useState } from "react";
import Navbar from '../../components/Navbar'
import axios from "axios";
import { AuthContext } from "../../authContext";
import "../../styles/forms.css"
import { useNavigate } from "react-router-dom";

const EditGift = ( {params} ) => {

console.log(params);
    const [info, setInfo] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInfo(
            (prev) => ({
                ...prev, [e.target.id]: e.target.value
            }
            ));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        const newpost = {
            ...info,
            user: user._id,
        }

        try {
            await axios.post(
                "http://localhost:7700/api/gift/create",
                newpost)
            navigate('/gifts')
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="newFormContainer">
            <Navbar />
            <div className="cpContainer">
                <div className="formContainer">
                    <h1>Edit A Gift</h1>
                    <div className="inputContainer">
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="name"
                                placeholder="Enter Name"
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="website">Website</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="website"
                                placeholder="Enter website"
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="location">Threshold</label>
                            <input
                                onChange={handleChange}
                                type="number"
                                min="0"
                                step="0.01"
                                id="threshold"
                                placeholder="Enter threshold"
                            />
                        </div>

                        <button className="button"
                            onClick={handleClick} type="submit">
                            Save New Entry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditGift
