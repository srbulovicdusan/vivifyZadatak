import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: []
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
        
    }
    handleDelete(id){
        console.log('usao');
        var movies = JSON.parse(localStorage.getItem('movies'));
        var movieToDelete = movies.find(movie => movie.id == id);
        var index = movies.indexOf(movieToDelete);
        console.log('sdfsdfsdfsfd', index);
        movies.splice(index, 1);
        localStorage.setItem('movies', JSON.stringify(movies));
        let allMovies = MovieService.getMovies();
        allMovies = allMovies.filter(movie => movie.id != id);
        
        this.setState({ movies: allMovies });
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} delete={this.handleDelete} />
                    </div>
                </div>
            </div>
        );
    }
}