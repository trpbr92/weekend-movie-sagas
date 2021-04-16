import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


function AddMovie(){
const dispatch = useDispatch();
const history = useHistory();

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

const sendMovie = () =>{
    const movie = {
        title: title,
        poster: poster,
        description: description,
        genre: genre
    }
    dispatch({type: 'SEND_MOVIE', payload: movie});
    history.push('/');

}

    

    return(
        <main>
        <h1>Add Movie</h1>
        <div>
        <input onChange={(event) => setTitle(event.target.value)} value={title} type="text" placeholder="Title"/>
        <input onChange={(event) => setPoster(event.target.value)} value={poster} type="text" placeholder="URL"/>
        <textarea onChange={(event)=> setDescription(event.target.value)} value={description} name="Description" id="description" cols="30" rows="5">Description</textarea>
        <select onChange={(event)=> setGenre(event.target.value)} value={genre}>
            <option selected disabled>Genres</option>
            <option value={1}>Adventure</option>
            <option value={2}>Animated</option>
            <option value={3}>Biographical</option>
            <option value={4}>Comedy</option>
            <option value={5}>Disaster</option>
            <option value={6}>Drama</option>
            <option value={7}>Epic</option>
            <option value={8}>Fantasy</option>
            <option value={9}>Musical</option>
            <option value={10}>Romantic</option>
            <option value={11}>Science Fiction</option>
            <option value={12}>Space-Opera</option>
            <option value={13}>Superhero</option>
        </select>

    <Link to='/'>
        <button>Cancel</button>
    </Link>
    <button onClick={sendMovie}>Save</button>

        </div>
        </main>
    )
}

export default AddMovie;