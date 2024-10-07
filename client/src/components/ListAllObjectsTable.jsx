import React from 'react'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { Table } from 'react-bootstrap';

const MainTable = ({ obj }) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {obj.thead.map( (ele, index)=> {
                       return "<th>{ele}</th>"
                    }).join("")}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {obj.tbody ? ( obj.tbody.map( (row, index)=> {
                        row.map((val, i) => {
                            return <td>{val}</td>
                        }).join("</tr><tr>")
                    }).join("")) : "<td colspan='" + obj.thead.length + ">No Information Available</td>"}
                </tr>
            </tbody>
      </Table>
    )
}

export default MainTable