import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Post extends Component {
    render() {
        let {id, title} = this.props;
        return (
            <div>
                {title} - <Link to={`/posts/${id}`}>idpost</Link>
            </div>
        );
    }
}

export default Post;