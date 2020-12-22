import React, {Component} from 'react';

class User extends Component {
    render() {
        let {user} = this.props;
        console.log(user);

        return (
            <div>
                {user && <div>{user.id}__{user.name}</div>  }
            </div>
        );
    }
}

export default User;