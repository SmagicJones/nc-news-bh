import {useState, useEffect} from 'react'
import {fetchComments} from '../utils/api.js'
import{useParams} from 'react-router-dom';
import NewCommentForm from './NewCommentForm'
import CommentCard from './CommentCard'
import Footer from './Footer'

const Comments = ()=>{
    const {article_id} = useParams()
   
    const [newComments, setNewComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isPosting, setIsPosting] = useState(false)
    const [postError, setPostError] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(()=>{
        fetchComments(article_id).then((data)=>{
            const {comments} = data;
            setNewComments(comments)  
            setIsLoading(false)
        })

    },[isPosting, isDeleting])


    if(isLoading){
        return <section>
        <p>...Pulling up your chosen NCnews Articles </p>
        <img id="logo" src='/src/images/bob-teaches-logo.svg'/>
        </section>
    }
   

    return (
        <>
        <h1>Comments</h1>
        <NewCommentForm setNewComments={setNewComments} setIsPosting={setIsPosting} setPostError={setPostError}/>
        <ul>
        {postError ? <p>{postError}</p> : <></> }
        {newComments ? newComments.map((comment)=>{
            return(
                <main key={comment.comment_id}>
                <CommentCard article_id={comment.article_id} author={comment.author} body={comment.body} comment_id={comment.comment_id} created_at={comment.created_at} votes={comment.votes} setIsDeleting={setIsDeleting}/>
                </main>
            )
        }) :
            <main>
            <p>No comments at the minute</p>
            </main>
        }
        </ul>
        <Footer/>
        </>
    )

}

export default Comments;