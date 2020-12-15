import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import ComentService from "../service/comentService";



class FullComment extends Component {
    state = {comment : null}
    commentServise = new ComentService()

    async componentDidMount() {
        const {id} = this.props;
        const comment = await this.commentServise.getcomment(id);
        console.log(comment)
        this.setState({comment: {comment}})
    }
    render() {
        let {comment} = this.state;

        return (
            <div>
                {comment && <div>{comment.comment.name}____{comment.comment.id}</div> }
            </div>
        );
    }
}

export default  withRouter(FullComment);