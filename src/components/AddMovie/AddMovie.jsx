import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function AddMovie(){

    const [genre, setGenre] = useState('');

        const handleChangeTitle = (event) => {
        console.log('in handleChangeTitle:', event.target.value);
        dispatch({type: 'SET_TITLE'});
        setGenre(event.target.value);
    }

            const handleChangeURL = (event) => {
        console.log('in handleChangeURL', event.target.value);
        //dispatch({type: 'setURL'});
        setGenre(event.target.value);
    }

                const handleChangeDescription = (event) => {
        console.log('in handleChangeDescription', event.target.value);
        //dispatch({type: 'setDescription'});
        setGenre(event.target.value);
    }


    const handleChangeGenre = (event) => {
        console.log('in handleChangeGenre:', event.target.value);
        //dispatch({type: 'setGenre'});
        setGenre(event.target.value);
    }

    

    return(
        <main>
        <h1>Add Movie</h1>
        <div>
        <input type="text" placeholder="Title" onChange={handleChangeTitle}/>
        <input type="text" placeholder="URL" onChange={handleChangeTitle}/>
        <textarea onChange={handleChangeDescription} name="Description" id="description" cols="30" rows="5">Description</textarea>
        <select onChange={handleChangeGenre}>
            <option>Genres</option>
            <option>Adventure</option>
            <option>Animated</option>
            <option>Biographical</option>
            <option>Comedy</option>
            <option>Disaster</option>
            <option>Drama</option>
            <option>Epic</option>
            <option>Fantasy</option>
            <option>Musical</option>
            <option>Romantic</option>
            <option>Science Fiction</option>
            <option>Space-Opera</option>
            <option>Superhero</option>
        </select>

    <Link to='/'>
        <button>Cancel</button>
    </Link>
    <button>Save</button>

        </div>

        </main>
        
    )
}

export default AddMovie;