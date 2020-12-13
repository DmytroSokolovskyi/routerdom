import React, {Component} from 'react';
import PostsService from "../service/PostsService";
import Post from "../post/Post";
import User from "../user/User";
import './Allpost.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from "react-router-dom";
import FullPost from "../fullPost/FullPost";

class Allposts extends Component {
    state = {allposts: []};
    postService = new PostsService();

    async componentDidMount() {
        let myposts = await this.postService.posts();
        this.setState({allposts: myposts});
    }


    render() {
        let {allposts} = this.state;
        console.log(allposts);
        let {match: {url}} = this.props;

        return (
            <div>
                {allposts.map(value => <Post title={value.title} id={value.id} key={value.id}/>)}
                <div className={'all-post'}>
                    <Switch>
                        <Route  path={`${url}/:id`} render={(props) => {
                            console.log(props);
                            let {match: {params: {id}}} = props;
                            return <FullPost id={id} key={id}/>
                        }} />

                    </Switch>

                </div>
            </div>

        );
    }
}

export default  withRouter(Allposts);