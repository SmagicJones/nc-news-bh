

import { useContext } from 'react';
import DeleteComment from './DeleteComment'
import { UserContext } from '../contexts/UserContext';

const CommentCard = ({article_id, author, body, comment_id, created_at, votes, setIsDeleting={setIsDeleting} })=>{

    const {user} = useContext(UserContext)

    return (
        <li className="card">
        <p className="title">Comment {comment_id}</p>
        <p>Author: <em>{author}</em></p>
        <p>{body}</p>
        <p>{created_at}</p>
        <p>Votes: {votes}</p>
        <p>Comment for article with id: {article_id}</p> 
        {user === author ?  <DeleteComment comment_id={comment_id} setIsDeleting={setIsDeleting}/> :  <></>}
       
        </li>
    )

}

export default CommentCard;