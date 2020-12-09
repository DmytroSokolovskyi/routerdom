import React, {Component} from 'react';
import PostsService from "../service/PostsService";
import Post from "../post/Post";
import User from "../user/User";

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
        return (
            <div>
                {
                    allposts.map(value => <Post title={value.title} id={value.id} key={value.id}/>)
                }
            </div>
        );
    }
}

export default Allposts;