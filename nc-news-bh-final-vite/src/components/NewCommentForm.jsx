import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import {postComment, fetchUsers} from '../utils/api.js';
import {UserContext} from '../contexts/UserContext'



const NewCommentForm = ({setNewComments, setIsPosting, setPostError})=>{
    const {article_id} = useParams();
    const {user, setUser} = useContext(UserContext)

    const [newComment, setNewComment] = useState({
        username: user,
        body: ""
    });

   

    let isValidUser = false

useEffect(()=>{
    fetchUsers().then(({users})=>{
        users.forEach(userInDatabase => {
            if (userInDatabase === user){
                   isValidUser = true
                    }
            })
    })
},[])

let isDisabled = false


function handleSubmit(e){
    e.preventDefault();
        setIsPosting(true)
            isDisabled = true
            if(newComment.body){
                postComment(newComment, article_id).then((newComment)=>{
                    isDisabled = false
                    setIsPosting(false)
                    setNewComments((currComments)=> [newComment, ...currComments]) 
                    setNewComment({
                        username: user,
                        body: ""
                        })
                }) 
                .catch((err)=>{
                    setPostError('invalid username')
                })  
            }
                                            
    }

         


    return(
        <form id='comment-form' onSubmit={handleSubmit}>
        <fieldset>
        <legend>Post a comment</legend>
        <label htmlFor="username">Enter your name: </label>
        <input id="username" type="text" name="username" value={newComment.username} onChange={(e)=>{setNewComment({...newComment, username: e.target.value})}}/>
        <label htmlFor="body">Your comment: </label>
        <textarea id="body" type="text" name="comment-body" value={newComment.body} onChange={(e)=>{setNewComment({...newComment, body: e.target.value})}}/>
        <button disabled={isDisabled}>submit</button>
        </fieldset>
        </form>
    )

}

export default NewCommentForm;