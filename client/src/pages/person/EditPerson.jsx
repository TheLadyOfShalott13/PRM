import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar'
import axios from "axios";
import "../../styles/forms.css"
import { useNavigate, useParams } from "react-router-dom";

const EditPerson = ( {params} ) => {

    const {id} = useParams();
    const [info, setInfo] = useState({});
    const navigate = useNavigate();
    const [responseRecieved, setResponseStatus] = useState(false);
	const [data, setData] = useState([]);

    useEffect(() => {
		const loadData = async () => {
			// Till the data is fetch using API
			// the Loading page will show.
			setResponseStatus(false);

			// Await make wait until that
			// promise settles and return its result
			axios.get(`http://localhost:3000/person/get/${id}`).then((response) => {
		      	setData(response.data);
		    	setResponseStatus(true);
		    }).catch((err) => {
				setResponseStatus(true);		//error state
		 	});
			console.log('Completed');
		};

		// Call the function
		loadData();
	}, []);

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
            ...info
        }

        try {
            await axios.put(
                `http://localhost:7700/api/interest/update/${id}`,
                newpost)
            navigate('/persons')
        } catch (err) {
            console.log(err);
        }

    };


    if (responseRecieved) {
        if (data.length>0) {
            return (
                <div className="newFormContainer">
                    <Navbar />
                    <div className="cpContainer">
                        <div className="formContainer">
                            <h1>Edit A Person: {data[0]._id}</h1>
                            <div className="inputContainer">
                                <div className="input">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        onChange={handleChange}
                                        value={info.name? info.name : data[0].name}
                                        type="text"
                                        id="name"
                                        placeholder="Enter Name"
                                    />
                                </div>

                                <div className="input">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        onChange={handleChange}
                                        value={info.email? info.email : data[0].email}
                                        type="email"
                                        id="email"
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="input">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        onChange={handleChange}
                                        value={info.phone? info.phone : data[0].phone}
                                        type="number"
                                        id="phone"
                                        placeholder="Enter phone"
                                    />
                                </div>

                                <div className="input">
                                    <label htmlFor="birthday">Birthday</label>
                                    <input
                                        onChange={handleChange}
                                        value={info.birthday? info.birthday : (new Date(data[0].birthday)).toISOString().split('T')[0]}
                                        type="date"
                                        id="birthday"
                                        placeholder="Enter birthday"
                                    />
                                </div>

                                <div className="input">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        onChange={handleChange}
                                        value={info.address? info.address : data[0].address}
                                        type="text"
                                        id="address"
                                        placeholder="Enter address"
                                    />
                                </div>

                                <button className="button"
                                    onClick={handleClick} type="submit">
                                    Save New Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (<div className="newFormContainer">
                    <Navbar />
                    <div className="cpContainer">
                        <div className="formContainer">
                            <h1>Edit A Person</h1>
                            <h1 className="feedback-header">Cannot Find Item</h1>
                        </div>
                    </div>
            </div>)
        }
    }
    else {
        return (<div className="newFormContainer">
                    <Navbar />
                    <div className="cpContainer">
                        <div className="formContainer">
                            <h1>Edit A Person</h1>
                            <h1 className="feedback-header">Loading Form</h1>
                        </div>
                    </div>
            </div>)
    }
}

export default EditPerson
