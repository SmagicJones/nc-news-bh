import {fetchTopics} from '../utils/api.js'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Topics = ()=>{
    const {topic} = useParams()
    console.log(topic)
    const [topics, setTopics] = useState([])
    const [chosenTopic, setChosenTopic] = useState('')


    const handleChange = (event)=>{
        setChosenTopic(event.target.value)
    }

    useEffect(()=>{
        fetchTopics(chosenTopic).then((data)=>{
            setTopics(data)
        })
    },[])

   

    return (
        <>
        <p>Select articles by Topic</p>
        <ul>
        <button><li className="topics"><Link to={`/`}>All Articles</Link></li></button>
            {topics.map((topic)=>{
                return (
                    <li className="topics" key={topic.slug}>
                    <button><Link to={`/articles/topics/${topic.slug}`}>{topic.slug}</Link></button>
                    </li>
                )
            })}

        </ul>
      
        </>
        
    )

}



export default Topics