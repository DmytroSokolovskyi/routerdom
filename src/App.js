import React, {Component} from 'react';

import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Allusers from "./components/allusers/Allusers";
import Allposts from "./components/allposts/Allposts";
import Allcoments from "./components/allcoments/Allcoments";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={"/users"}>users</Link>
                    </div>
                    <div>
                        <Link to={"/posts"}>posts</Link>
                    </div>
                    <div>
                        <Link to={"/coments"}>coments</Link>
                    </div>
                    <div className={'app-class'}>
                        <Switch>
                            <Route path={'/users'}  render={() => {
                                return <Allusers/>;
                            }}/>

                            <Route path={'/posts'} render={() => {
                             return <Allposts/>;
                            }} />
                            <Route path={'/coments'} render={() =>{
                             return <Allcoments/>
                            }}/>

                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;
