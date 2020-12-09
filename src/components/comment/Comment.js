import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Comment extends Component {
    render() {
        let {text, id} = this.props;
        return (
            <div>
                {text} - <Link to={`/comment/${id}`}>comID</Link>
            </div>
        );
    }
}

export default Comment;