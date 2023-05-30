const ArticleCard = ({author, title, topic, created_at, votes, article_img_url, comment_count})=>{
    return (
        <li className="card">
        <p>Author: {author}</p>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <p>Created: {created_at}</p>
        <p>Votes: {votes}</p>
        <img id="articleImg" src={article_img_url} alt={title}/>
        <p>Number of Comments: {comment_count}</p>

        </li>
    )

}

export default ArticleCard