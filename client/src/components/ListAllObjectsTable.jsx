import React, {Suspense} from 'react'
import { Table } from 'react-bootstrap';

const MainTable = ({ tbody, thead, options }) => {

    var table = {}
    table.thead = thead.thead;
    table.tbody = tbody.tbody;
    const optName = options.options_name;
    const OptComponent = React.lazy(() => import('../options/'+optName+'Options.jsx'));

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
                                ele[index] = <Suspense fallback={<div>Loading...</div>}><OptComponent id={ele._id} /></Suspense>
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