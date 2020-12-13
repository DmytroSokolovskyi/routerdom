import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import PostsService from "../service/PostsService";

class FullPost extends Component {
state = {post: null};
postService = new PostsService()

  async  componentDidMount() {
    const {id} = this.props;
    let post = await this.postService.post(id);
    this.setState({post: {post}})
    }

    render() {
        let {post} = this.state;
        console.log(post);

        return (
            <div>
                {post && <div>{post.body}--++--{post.title}</div>}
            </div>
        );
    }
}

export default withRouter(FullPost);