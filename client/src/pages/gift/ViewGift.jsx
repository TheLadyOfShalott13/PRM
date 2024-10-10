import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../../components/Navbar'
import VerticalTable from '../../components/ViewSingleObjectTable'
import "../../styles/tables.css"
import { useParams } from "react-router-dom";

const ViewGift = ({params}) => {

    const {id} = useParams();
    const attributes = ['_id','name','website','createdAt','updatedAt','options'];
	const [responseRecieved, setResponseStatus] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			// Till the data is fetch using API
			// the Loading page will show.
			setResponseStatus(false);

			// Await make wait until that
			// promise settles and return its result
			axios.get(`http://localhost:3000/gift/get/${id}`).then((response) => {
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

    return (
        <div className="table-container">
            <Navbar />
			<h1>View A Gift</h1>
			{	responseRecieved ? data.length>0 ? <VerticalTable attributes={attributes} data={data} option="gift" /> : <h1 className="feedback-header">Cannot Find Item</h1> : <h1 className="feedback-header">Loading Table</h1> }
        </div>
    )
}

export default ViewGift