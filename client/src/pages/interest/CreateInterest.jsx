import React, { useContext, useState } from "react";
import Navbar from '../../components/Navbar'
import axios from "axios";
import { AuthContext } from "../../authContext";
import "../../styles/forms.css"
import { useNavigate } from "react-router-dom";

const CreateInterest = () => {

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
                "http://localhost:7700/api/interest/create",
                newpost)
            navigate('/interests')
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="newFormContainer">
            <Navbar />
            <div className="cpContainer">
                <div className="formContainer">
                    <h1>Add A New Interest</h1>
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
                            <label htmlFor="category">Category</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="category"
                                placeholder="Enter category"
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

export default CreateInterest
