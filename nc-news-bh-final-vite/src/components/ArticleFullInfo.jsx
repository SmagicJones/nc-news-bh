
import Header from './Header'


const ArticleFullInfo = ({article_id, title, topic, author, body, created_at, votes, article_img_url})=>{
    return(
        <>
        <Header/>
      
        <ul className="card">
         <li>
    <section>
    <p className="title">{title}</p>
    <img id="articleFullImg" src={article_img_url} alt={title}/>
    <p>Topic: {topic}</p>
    <p>Author: {author}</p>
    <p>{body}</p>
    <p>Created: {new Date(created_at).getFullYear()}</p>
    <p>Votes: {votes}</p>
    <p>Article ID: {article_id}</p>
    </section>
    </li>
    </ul>
    </>
    )

}

export default ArticleFullInfo;