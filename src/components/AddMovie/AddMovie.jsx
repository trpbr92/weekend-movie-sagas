import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function AddMovie(){

    return(
        <main>
        <h1>Add Movie</h1>
        <div>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="URL"/>
        <textarea name="Description" id="description" cols="30" rows="5"></textarea>
        <select>
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