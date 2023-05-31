const CommentCard = ({article_id, author, body, comment_id, created_at, votes})=>{
    return (
        <li className="card">
        <p className="title">Comment {comment_id}</p>
        <p>Author: <em>{author}</em></p>
        <p>{body}</p>
        <p>{created_at}</p>
        <p>Votes: {votes}</p>
        <p>Comment for article with id: {article_id}</p> 
        </li>
    )

}

export default CommentCard;