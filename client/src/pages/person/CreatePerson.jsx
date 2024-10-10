import React, { useContext, useState } from "react";
import Navbar from '../../components/Navbar'
import axios from "axios";
import { AuthContext } from "../../authContext";
import "../../styles/forms.css"
import { useNavigate } from "react-router-dom";

const CreatePerson = () => {

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
                "http://localhost:7700/api/person/create",
                newpost)
            navigate('/persons')
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="newFormContainer">
            <Navbar />
            <div className="cpContainer">
                <div className="formContainer">
                    <h1>Add A New Person</h1>
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
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="phone">Phone</label>
                            <input
                                onChange={handleChange}
                                type="number"
                                id="phone"
                                placeholder="Enter phone"
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="birthday">Birthday</label>
                            <input
                                onChange={handleChange}
                                type="date"
                                id="birthday"
                                placeholder="Enter birthday"
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="address">Address</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="address"
                                placeholder="Enter address"
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

export default CreatePerson
