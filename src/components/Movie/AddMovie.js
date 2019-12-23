import React, { Component } from 'react';
import '../../styles/components/_AddMovie.css';
import {
    BrowserRouter as 
    Route,
    Link
} from 'react-router-dom';

export default class AddMovie extends Component {

    constructor() {
        super();

        this.state = {
            naslov : '',
            url : '',
            podnaslov : '',
            opis : '',
            validniPodaci : 'Sva polja moraju biti popunjena'
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.invalidData = this.invalidData.bind(this);
    }
    
    onChangeHandler  (event){
        if (event.target.name === 'url'){
            this.setState({url : event.target.value});
        }else if (event.target.name === 'naslov'){
            this.setState({naslov : event.target.value});

        }else if (event.target.name === 'podnaslov'){
            this.setState({podnaslov : event.target.value});

        }else if (event.target.name === 'opis'){ 
            this.setState({opis : event.target.value});

        }

        
        if (this.state.naslov === '' && this.state.url === '' && this.state.podnaslov === '' && this.state.opis === ''){
            
            this.setState({validniPodaci : 'Sva polja moraju biti popunjena'});
        }else{
            this.setState({validniPodaci : ''});
        }
    }

    
    invalidData(){
        if (this.state.naslov === '' || this.state.url === '' || this.state.podnaslov === '' || this.state.opis === ''){
            return true;
        }else{
            return false;
        }
    }
    onSubmit (){
        if (this.invalidData() == false){
            var movie = {
                id : Math.floor(Math.random() * 100000),
                title : this.state.naslov,
                subtitle : this.state.podnaslov,
                description : this.state.opis,
                year : 2016,
                url : this.state.url,
                rating : 0.0
            };
            var movies = JSON.parse(localStorage.getItem('movies'));
            if (movies == null){
                movies = [];
            }
            movies.push(movie);
            localStorage.setItem('movies', JSON.stringify(movies));
            alert('Uspesno dodat film');
        }
    }
    render() {

        
        return (
            <div  className="forma" style={{marginLeft: '-15px'}}>
                <Route path="/">
                    
                    <Link to="/">Home</Link>
                    
                    
                </Route>
                <h1>Dodavanje filma</h1>
                <div >
                    <h2>Url do slike</h2>                    
                    <input type="text" value={this.state.url} onChange={this.onChangeHandler} name="url"></input>
                    <br/>
                    <h2>Naslov</h2> 
                    
                    <input type="text" value={this.state.naslov} onChange={this.onChangeHandler} name="naslov"></input>
                    <br/>
                    <h2>Podnaslov</h2>
                    <input type="text" value={this.state.podnaslov} onChange={this.onChangeHandler} name="podnaslov"></input>
                    <br/>
                    <h2>Opis</h2> 
                    <input type="text" value={this.state.opis} onChange={this.onChangeHandler} name="opis"></input>
                    <br/>
                    <button onClick={this.onSubmit}>Dodaj</button>
                    <br/>

                    <div>{this.invalidData() ? <p>Sva polja moraju biti popunjena</p> : null}</div>

                </div>
            </div>
        );
    }
}