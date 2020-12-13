import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class Comment extends Component {
    render() {
        let {text, id, match: {url}} = this.props;
        return (
            <div>
                {text} - <Link to={`${url}/${id}`}>comID</Link>
            </div>
        );
    }
}

export default withRouter(Comment);