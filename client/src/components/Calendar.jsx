import React from 'react'
import { Table } from 'react-bootstrap';

const Calendar = ({ month, year }) => {
    let result = [];
    let temp = {};
    let lastDay = new Date(year, month, 0).getDate();
    let j=0,i=0;
    let weekday= ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    for (let i=1; i<=lastDay; i++) {
        let w = weekday[(new Date(year, month-1, i).getDay())];
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
                            return(<th key={ele}>{ele}</th>)
                        }) }
                    </tr>
                </thead>
                <tbody>
                    { result.map(function(week,w){
                        return (
                            <tr key={w}>
                                <td key={i++}>{ week.Sun ? week.Sun : "" }</td>
                                <td key={i++}>{ week.Mon ? week.Mon : "" }</td>
                                <td key={i++}>{ week.Tues ? week.Tues : "" }</td>
                                <td key={i++}>{ week.Wed ? week.Wed : "" }</td>
                                <td key={i++}>{ week.Thurs ? week.Thurs : "" }</td>
                                <td key={i++}>{ week.Fri ? week.Fri : "" }</td>
                                <td key={i++}>{ week.Sat ? week.Sat : "" }</td>
                            </tr>
                        )
                    }) }
                </tbody>
          </Table>
        )
}

export default Calendar