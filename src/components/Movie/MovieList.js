import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const getMovies = (movies, deleteFunction, rate) => {
    return (
        <div className="card-deck">
            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie} delete={deleteFunction} rate={rate}/>)
            }
        </div>
    );
};

const MovieList = (props) => (
    <div>
        {getMovies(props.movies, props.delete, props.rate)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array,
    delete: PropTypes.func,
    rate : PropTypes.func
};


export default MovieList;