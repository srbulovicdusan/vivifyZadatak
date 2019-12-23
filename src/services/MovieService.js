import movies from './movies.json';

export default class MovieService {
    static getMovies() {
        var newMovies = JSON.parse(localStorage.getItem('movies'));
        console.log(newMovies);
        if (newMovies != null){
            for (var movie of newMovies){
                movies.push(movie);
            }
        }
        return movies ? movies : [];
    }
}