import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'

function MovieList(props) {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // const handleMovieDetails = (movie) =>{
    //     props.setDetail({id: movie.id, description: movie.description, title: movie.title, poster: movie.poster});
    //     console.log('in handleMovieDetails');
    // }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Link to = {`/MovieDetails/${movie.id}`}>
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} className="poster"/>
                        </div>
                        </Link>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;