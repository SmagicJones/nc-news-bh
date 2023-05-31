import {useParams} from 'react-router-dom'

const ArticleCard = ({article_id, author, title, topic, created_at, votes, article_img_url, comment_count})=>{
   


    return (
        <li className="card">
        {/* <p>Article_id: {article_id} </p> */}
        {/* <p>Author: {author}</p> */}
        <p className="title">{title}</p>
        <p>Topic: <em>{topic}</em></p>
        {/* <p>Created: {new Date(created_at).getFullYear()}</p> */}
        <p>Votes: {votes}</p>
        <img id="articleImg" src={article_img_url} alt={title}/>
        {/* <p>Number of Comments: {comment_count}</p> */}
        <footer> 
        <a href={`articles/${article_id}`}><button className="infoButton">More Info</button></a>
        </footer>
        
        </li>
    )

}

export default ArticleCard