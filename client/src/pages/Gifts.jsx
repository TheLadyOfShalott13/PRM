import React from 'react'
import useFetch from '../useFetch'
import { Link } from "react-router-dom";
import MainTable from '../components/ListAllObjectsTable'
import Navbar from '../components/Navbar'
import "../styles/tables.css"
import {Button} from "react-bootstrap";

const DisplayAllGiftsTabular = ({ type }) => {

    // Call useFetch unconditionally
    const { data } = useFetch(`api/gift/list`)

    return (
        <div>
            <Navbar />
            <div className="table-container">
                <div className="title-and-options">
                    <h1>View All Gifts</h1>
                    <Button className="add-new">
                        <Link to="/CreateGift">Add New Gift</Link>
                    </Button>
                </div>
                <MainTable obj={{ data }} />
            </div>
        </div>
    )
}

export default DisplayAllGiftsTabular
