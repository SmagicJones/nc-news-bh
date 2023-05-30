import {useState, useEffect} from "react"

import { fetchArticles } from '../utils/api.js'

import ArticleCard from './ArticleCard'


const ArticlesList = () =>{
    const [articlesList, setArticlesList] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetchArticles().then((data)=>{
            const articles = data.articles
            setArticlesList(articles)
            setIsLoading(false)
        })
    }, [])

    if(isLoading){
        return <p>...Loading</p>
    }

    return(
        <>
        <h1>NC News</h1>
        <ul>
        {articlesList.map((article)=>{
            return(
                <main id={article.article_id}>
                <ArticleCard author={article.author} title={article.title} topic={article.topic} created_at={article.created_at} votes={article.votes} article_img_url={article.article_img_url} comment_count={article.comment_count}></ArticleCard>
                </main>
            )
        })}
        </ul>
        </>
    )

}

export default ArticlesList;