import {useState, useEffect} from 'react'
import {upVote, downVote} from '../utils/api.js'
import {useParams} from 'react-router-dom'

const Votes = ({votes})=>{
   
    const {article_id} = useParams();
    const [voteChange, setVoteChange] = useState(0)
    const incVotes = ()=>{
        setVoteChange((currVotes)=> currVotes + 1)
        upVote(article_id).then((data)=>{
        })
        .catch(()=>{
            setVoteChange((currVotes)=> currVotes - 1)
        })
    }
    const decVotes = ()=>{
        setVoteChange((currVotes)=> currVotes - 1)
        downVote(article_id).then((data)=>{
           
        })
        .catch(()=>{
            setVoteChange((currVotes)=> currVotes + 1)
        })
    }

    const isDisabled = voteChange > 0 || voteChange < 0;


    return (
        <section>
        <p>votes: {votes + voteChange}</p>
        <button onClick={incVotes} disabled={isDisabled}>upVote</button>
        <button onClick={decVotes} disabled={isDisabled}>downVote</button>
        </section>
    )

}

export default Votes