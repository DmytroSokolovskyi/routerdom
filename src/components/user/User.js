import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class User extends Component {
    render() {
        let {user} = this.props;
        return (
            <div>
                {user.name} - <Link to={`/users/${user.id}`}>info</Link>
            </div>
        );
    }
}

export default User;