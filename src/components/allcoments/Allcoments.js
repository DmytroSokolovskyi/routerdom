import React, {Component} from 'react';
import ComentService from "../service/comentService";
import Comment from "../comment/Comment";

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
        console.log(comment);

        return (
            <div>
                {
                    comment.map(commen => <Comment text={commen.name} id={commen.id} key={commen.id} />)
                }
            </div>
        );
    }
}

export default Allcoments;