import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import UserServise from "../service/userServises";

class FullUser extends Component {
    state = {user: null}
    userServise = new UserServise()

    async componentDidMount() {
        const {id} = this.props;
        const user = await this.userServise.getuser(id);
        this.setState({user: {user}})
    }

    render() {
        let {user} = this.state;
        console.log(user);

        return (
            <div>
                {user && <div>{user.name}--++--{user.username}</div>}
            </div>
        );
    }
}

export default withRouter(FullUser);