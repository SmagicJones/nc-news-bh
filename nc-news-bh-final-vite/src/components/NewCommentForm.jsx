import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {postComment} from '../utils/api.js';


const NewCommentForm = ({setNewComments})=>{
    const {article_id} = useParams();

    const [newComment, setNewComment] = useState({
        username: "",
        body: ""
    });

    function handleSubmit(e){
        e.preventDefault();
        postComment(newComment, article_id).then((newComment)=>{
            setNewComments((currComments)=> [newComment, ...currComments]) 
            setNewComment({
                username: "",
                body: ""
            })
        })     
    }

    return(
        <form id='comment-form' onSubmit={handleSubmit}>
        <fieldset>
        <legend>Post a comment</legend>
        <label htmlFor="username">Enter your name: </label>
        <input id="username" type="text" name="username" value={newComment.username} onChange={(e)=>{setNewComment({...newComment, username: e.target.value})}}/>
        <label htmlFor="body">Your comment: </label>
        <input id="body" type="text" name="comment-body" value={newComment.body} onChange={(e)=>{setNewComment({...newComment, body: e.target.value})}}/>
        <button>submit</button>
        </fieldset>
        </form>
    )

}

export default NewCommentForm;