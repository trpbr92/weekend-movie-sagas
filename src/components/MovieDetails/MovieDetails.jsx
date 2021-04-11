import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

function MovieDetails(props){
const dispatch = useDispatch();
 const [details, setDetails] = useState([]);

    useEffect(() => {
    axios.get(`/api/genre/${props.id}`).then((response)=>{
        console.log('in get api/genre', response.data);
        setDetails(response.data);
    }).catch((err)=>{
        alert(err);
    })

    }, []);

console.log(props);
    return(
        <>
        <div>
        {details.map(detail => (
            <>
                <p key = {detail.id}>{detail.name}</p>
             </>       
                    ))}
            <p>{details[0]?.description}</p>
        </div>
        <Link to ="/">
        <button>Back to Movie List</button>
        </Link>
        </>
    )
}


export default MovieDetails;