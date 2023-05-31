import {useParams} from 'react-router-dom'

const ArticleCard = ({article_id, author, title, topic, created_at, votes, article_img_url, comment_count})=>{
   


    return (
        <li className="card">
        <p className="title">{title}</p>
        <p>Topic: <em>{topic}</em></p>
        <p>Votes: {votes}</p>
        <img id="articleImg" src={article_img_url} alt={title}/>
        <footer> 
        <a href={`articles/${article_id}`}><button className="infoButton">More Info</button></a>
        </footer>
        
        </li>
    )

}

export default ArticleCard