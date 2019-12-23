import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const getMovies = (movies, deleteFunction) => {
    return (
        <div className="card-deck">
            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie} delete={deleteFunction} />)
            }
        </div>
    );
};

const MovieList = (props) => (
    <div>
        {getMovies(props.movies, props.delete)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array,
    delete: PropTypes.func
};


export default MovieList;