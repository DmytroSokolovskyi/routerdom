import React, {Component} from 'react';
import UserService from "../service/UserService";
import User from '../user/User'


class MyUser extends Component {
    choseIdUser = React.createRef();
    state = {choseIdUservalue: '', user: []};
    giveMeUser = new UserService()


    choseId = () => {
        this.setState({choseIdUservalue: this.choseIdUser.current.value})
    };

    onFormSubmit = (e) => {
        e.preventDefault()
        this.giveMeUser.getUserbyId(this.state.choseIdUservalue)
            .then(value => this.setState({user: value}))
    };

    showButton = (id) => {
        if (id >= 1 && id <= 10) {
            return false
        } else {
            return true
        }
    };


    render() {
        let {choseIdUservalue, user} = this.state;

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>

                    <input ref={this.choseIdUser} type={'number'} onInput={this.choseId} value={choseIdUservalue}/>
                    <button disabled={this.showButton(choseIdUservalue)}>GET</button>

                    <div>
                        <User user={user}/>
                    </div>

                </form>
            </div>
        );
    }
}

export default MyUser;