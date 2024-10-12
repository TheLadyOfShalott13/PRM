import React, {Suspense} from 'react'
import { Table } from 'react-bootstrap';

const Calendar = ({ month, year }) => {
    var result = [];
    var temp = {};
    var lastDay = new Date(year, month, 0).getDate();
    var j=0;
    var weekday= ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    for (var i=1; i<=lastDay; i++) {
        var w = weekday[(new Date(year, month-1, i).getDay())];
        temp[w] = (new Date(year, month-1, i)).toLocaleDateString("en-CA", {year:"numeric", month: "2-digit", day:"2-digit"});
        if (i===lastDay || w==="Sat") { //end of every week, assign the week to the result, and reset the week's variables
            result[j]=temp;
            temp = {};
            j++;
        }
    }

    return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        { weekday.map(function(ele){
                            return(<th>{ele}</th>)
                        }) }
                    </tr>
                </thead>
                <tbody>
                    { result.map(function(week,w){
                        return (
                            <tr>
                                <td>{ week.Sun ? week.Sun : "" }</td>
                                <td>{ week.Mon ? week.Mon : "" }</td>
                                <td>{ week.Tues ? week.Tues : "" }</td>
                                <td>{ week.Wed ? week.Wed : "" }</td>
                                <td>{ week.Thurs ? week.Thurs : "" }</td>
                                <td>{ week.Fri ? week.Fri : "" }</td>
                                <td>{ week.Sat ? week.Sat : "" }</td>
                            </tr>
                        )
                    }) }
                </tbody>
          </Table>
        )
}

export default Calendar