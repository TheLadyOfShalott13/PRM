import React, {Suspense, useContext, useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import { AuthContext } from '../../authContext'
import MainTable from '../../components/ListAllObjectsTable'
import Navbar from '../../components/Navbar'
import "../../styles/tables.css"
import {Button, Table} from "react-bootstrap";
import axios from "axios";

const EditGifts = ({ type }) => {

    const { id} = useParams();
    const { user } = useContext(AuthContext);
    const [loved, setLoved] = useState([]);
    const [liked, setLiked] = useState([]);
    const [neutral, setNeutral] = useState([]);
    const [hated, setHated] = useState([]);
    const [person, setPerson] = useState([]);
    const [interests, setInterests] = useState([]);
    const [gifts, setGifts] = useState([]);
    const giftList = [];
    //const [giftList, setGiftList] = useState([]);
    const [pageLoad, setPageLoad] = useState(true);
    const thead = ['select','name','website','threshold'];

    useEffect(()=> {
        async function getPerson(){
            axios.get(`http://localhost:7700/api/person/get/${id}`).then((response) => {
                setPerson(response.data);
                getInterests();
            }).catch((err) => { //error state
                console.log("ERROR FROM PERSON GET API: ")
        	    console.log(err);
        	});
        }

        async function getInterests(){
            console.log("DISPLAY PERSON: ");
            console.log(person);
            axios.post(`http://localhost:7700/api/interest/getMultipleByIds`, {
                        "ids": []
                }, {
                    "headers": {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    setInterests(response.data);
                    //getGifts();
            }).catch((err) => { //error state
                console.log("ERROR FROM INTEREST LIST API: ")
        	    console.log(err);
        	});
        }

        async function getGifts(){
            const interestIds = []; //TODO: Fill in the array here
            axios.post(`http://localhost:7700/api/gift/getMultipleByIds`, {
                    "ids": interestIds
                }, {
                    "headers": {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                setGifts(response.data);
                setPageLoad(false);
            }).catch((err) => { //error state
                console.log("ERROR FROM GIFT LIST API: ")
        	    console.log(err);
        	});
        }

        //console.log("+++++++++Interests: ");
        //console.log(selected);

        //console.log("Refresh: ");
        //console.log(refresh);

        if (person.length===0 && pageLoad ) { //refreshed anew
            getPerson().then( () => console.log('DONE!!!!!!!!!!!!!'));
        }
    },[id, pageLoad, person, user]);

    const selectLoved = async (e) => {
        //e.preventDefault();
        if (loved.includes(e.target.value)){
            setLoved(loved.filter(id => id !== e.target.value)); //remove the ID from list
        }
        else {
            setLoved([ e.target.value,...loved], () => {
                e.target.checked = true;
            }); //add the ID to the list
        }
    };

    const selectLiked = async (e) => {
        //e.preventDefault();
        if (liked.includes(e.target.value)){
            setLiked(liked.filter(id => id !== e.target.value)); //remove the ID from list
        }
        else {
            setLiked([ e.target.value,...liked], () => {
                e.target.checked = true;
            }); //add the ID to the list
        }
    };

    const selectNeutral = async (e) => {
        //e.preventDefault();
        if (neutral.includes(e.target.value)){
            setNeutral(neutral.filter(id => id !== e.target.value)); //remove the ID from list
        }
        else {
            setNeutral([ e.target.value,...neutral], () => {
                e.target.checked = true;
            }); //add the ID to the list
        }
    };

    const selectHated = async (e) => {
        //e.preventDefault();
        if (hated.includes(e.target.value)){
            setHated(hated.filter(id => id !== e.target.value)); //remove the ID from list
        }
        else {
            setHated([ e.target.value,...hated], () => {
                e.target.checked = true;
            }); //add the ID to the list
        }
    };

    const setGiftList = (id, type) => giftList[id] = type;

    console.log("DISPLAY PAGE LOAD: ");
    console.log(pageLoad);

console.log("DISPLAY INTEREST: ");
console.log(interests);
//{person[0]['name']}

    if (pageLoad) {
        return (
            <div>
                <Navbar />
                <div className="table-container">
                    <div className="title- and-options">
                        <h1>Select 's Interests:</h1>
                        <Button className="add-new">
                            <Link to={`/ViewPerson/${id}`}>View Person</Link>
                        </Button>
                    </div>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {thead.map( function(ele, i) {
                                    return (<th key={i}>{ele}</th>)
                                } )}
                            </tr>
                        </thead>
                        <tbody>
                            {gifts.map( function(ele,j) {
                                return (<tr key={j}>{
                                    thead.map( function(index, k) {
                                        if (index==='checkbox') {
                                            ele[index] = <div>
                                                            <input
                                                                type="radio"
                                                                value={ele['_id']}
                                                                checked=""
                                                                onChange={setGiftList(ele['_id'],'')}
                                                            />
                                                            <input
                                                                type="radio"
                                                                value={ele['_id']}
                                                                checked=""
                                                                onChange={setGiftList(ele['_id'],'')}
                                                            />
                                                            <input
                                                                type="radio"
                                                                value={ele['_id']}
                                                                checked=""
                                                                onChange={setGiftList(ele['_id'],'')}
                                                            />
                                                            <input
                                                                type="radio"
                                                                value={ele['_id']}
                                                                checked=""
                                                                onChange={setGiftList(ele['_id'],'')}
                                                            />
                                                         </div>
                                        }
                                        return(<td key={k}>{ele[index]}</td>)
                                    } )
                                }</tr>)
                            } )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <Navbar />
                <div className="table-container">
                    <div className="title- and-options">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditGifts
