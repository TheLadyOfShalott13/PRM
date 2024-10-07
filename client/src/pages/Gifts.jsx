import React, { useContext } from 'react'
import useFetch from '../useFetch'
import { AuthContext } from '../authContext'
import MainTable from '../components/ListAllObjectsTable'
import Navbar from '../components/Navbar'
import "../styles/tables.css"

const DisplayAllGiftsTabular = ({ type }) => {

    const { user } = useContext(AuthContext)

    // Call useFetch unconditionally
    const { data } = useFetch(`/customers/${user._id}`)

    return (
        <div>
            <Navbar />
            <div>
                <MainTable obj={{ data }} />
            </div>
        </div>
    )
}

export default DisplayAllGiftsTabular
