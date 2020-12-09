import React, {Component} from 'react';
import UserServise from "../service/userServises";
import User from "../user/User";

class Allusers extends Component {
    state = {alluser: []}
    userServise = new UserServise();

    async componentDidMount() {
        let users = await this.userServise.users();
        console.log(users);
        this.setState({alluser: users});
    }

    render() {
        let {alluser} = this.state;
        return (
            <div>
                {
                    alluser.map(user => <User user={user} key={user.id}/>)
                }
            </div>
        );
    }
}

export default Allusers;