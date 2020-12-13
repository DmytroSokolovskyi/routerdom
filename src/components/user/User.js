import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    withRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

class User extends Component {
    render() {
        let {user, match : {url}} = this.props;

        return (
            <div>
                {user.name} - <Link to={`${url}/${user.id}`}>info</Link>
            </div>
        );
    }
}

export default withRouter(User);