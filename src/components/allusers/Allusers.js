import React, {Component} from 'react';
import UserServise from "../service/userServises";
import User from "../user/User";
import './allusers.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from "react-router-dom";
import FullUser from "../fullUser/FullUser";

class Allusers extends Component {
    state = {alluser: []}
    userServise = new UserServise();

    async componentDidMount() {
        let users = await this.userServise.users();
        this.setState({alluser: users});
    }

    render() {
        let {alluser} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    alluser.map(user => <User user={user} key={user.id}/>)
                }
                <div className={'alluser-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            console.log(props);
                            let {match: {params: {id}}} = props;
                            return <FullUser id={id} key={id}/>
                        }}/>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter(Allusers);