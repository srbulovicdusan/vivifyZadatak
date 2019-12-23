import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import AddMovie from './Movie/AddMovie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards'
        };
    }

    render() {
        return (
            <div>
                
                <Router>
                    <div>
                    
                        
                    

                        {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/addMovie">
                                <AddMovie/>
                            </Route>
                        
                        
                        
                            <Route path="/">
                                <Header title={this.state.title} />
                                <li>
                                    <Link to="/addMovie">AddMovie</Link>
                                </li>
                                <div className="mt-5">
                                    <Movies />
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}