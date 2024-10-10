import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar'
import axios from "axios";
import "../../styles/forms.css"
import { useNavigate, useParams } from "react-router-dom";

const EditInterest = ( {params} ) => {

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
			axios.get(`http://localhost:3000/interest/get/${id}`).then((response) => {
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
            navigate('/interests')
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
                            <h1>Edit An Interest: {data[0]._id}</h1>
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
                                    <label htmlFor="category">Category</label>
                                    <input
                                        onChange={handleChange}
                                        value={info.category? info.category : data[0].category}
                                        type="text"
                                        id="category"
                                        placeholder="Enter category"
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
                            <h1>Edit An Interest</h1>
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
                            <h1>Edit An Interest</h1>
                            <h1 className="feedback-header">Loading Form</h1>
                        </div>
                    </div>
            </div>)
    }
}

export default EditInterest
