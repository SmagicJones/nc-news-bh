import {useEffect, useState} from 'react'
import { deleteComment } from '../utils/api.js'


const DeleteComment = ({comment_id, setIsDeleting})=>{

        function handleClick(){
            setIsDeleting(true)
            deleteComment(comment_id).then((data)=>{
                setIsDeleting(false)
            })
        }
  
   
  
        
   
    return (
        <button onClick={handleClick}>delete</button>
    )

}

export default DeleteComment