import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../../components/Navbar'
import "../../styles/tables.css"
import {Link, useParams} from "react-router-dom";

const ViewGift = ({params}) => {

	const {id} = useParams();
	const [responseRecieved, setResponseStatus] = useState(false);
	const [data, setData] = useState([]);

	const api_url = `http://${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_API_PORT}`
	const redirect_url = `http://${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_CORS_PORT}`

	useEffect(() => {
		const loadData = async () => {
			// Till the data is fetch using API
			// the Loading page will show.
			setResponseStatus(false);

			// Await make wait until that
			// promise settles and return its result
			axios.get(`${api_url}/api/giftRequest/get/${id}`).then((response) => {
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

	if (data.length>0) {
		return (
			<div className="table-container">
				<Navbar />
				<h1>Track Gift Request Status</h1>
				<h3>Click this link to track status: <Link to={data[0].tracking_link} >{data[0].tracking_link}</Link></h3>
	        </div>
	    )
	}
	else {
		return (
			<div className="table-container">
				<Navbar />
				<h1>Track Gift Request Status</h1>
				<h3>Loading...</h3>
	        </div>
	    )
	}
}

export default ViewGift
