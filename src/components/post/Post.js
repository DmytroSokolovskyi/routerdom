import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class Post extends Component {
    render() {
        let {id, title, match: {url} } = this.props;
        console.log(this.props);
        return (
            <div>
                {title} - <Link to={`${url}/${id}`}>postinfo</Link>
            </div>
        );
    }
}

export default withRouter(Post);