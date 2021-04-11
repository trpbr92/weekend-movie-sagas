import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function MovieDetails(props){
const dispatch = useDispatch();
 const [details, setDetails] = useState([]);

    useEffect(() => {
        //dispatch({ type: 'FETCH_DETAILS', payload: props.detail.id });
    axios.get(`/api/genre/${props.id}`).then((response)=>{
        console.log('in get api-genre', response.data);
        setDetails(response.data);
    }).catch((err)=>{
        alert(err);
    })

    }, []);

// const detail = useSelector(store =>{
//     return store.detail;
// })
console.log(props);
    return(
        <>
        <div>

    {/* <p>{props.detail.description}</p> */}

        {details.map(detail => (
            <>
                <p>{detail.name}</p>
             </>       
                    ))}
            <p>{details[0]?.description}</p>
   
        </div>
        </>

   
    )
}


export default MovieDetails;