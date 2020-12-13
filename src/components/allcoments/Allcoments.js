import React, {Component} from 'react';
import ComentService from "../service/comentService";
import Comment from "../comment/Comment";
import './AllComments.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullUser from "../fullUser/FullUser";
import FullComment from "../fullComment/FullComment";




class Allcoments extends Component {

    state = {comment: []};
    comentService = new ComentService();
t
   async componentDidMount() {
        let comments = await this.comentService.comment();
        this.setState({comment: comments})
    }

    render() {
    let {comment} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {comment.map(commen => <Comment text={commen.name} id={commen.id} key={commen.id} />)}
                <div className={'all-comment'}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullComment id={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Allcoments);