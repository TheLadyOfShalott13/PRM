import React from 'react'
import { Table } from 'react-bootstrap';

const MainTable = ({ tbody, thead, options }) => {

    var table = {}
    var val = '';
    table.thead = thead.thead;
    table.tbody = tbody.tbody;
    table.options = options.options;

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {table.thead.map( function(ele, i) {
                        return (<th key={i}>{ele}</th>)
                    } )}
                </tr>
            </thead>
            <tbody>
                {table.tbody.map( function(ele,j) {
                    return (<tr key={j}>{
                        table.thead.map( function(index, k) {
                            if (index==='options') {
                                ele[index] = '';
                            }
                            return(<td key={k}>{ele[index]}</td>)
                        } )
                    }</tr>)
                } )}
            </tbody>
      </Table>
    )
}

export default MainTable