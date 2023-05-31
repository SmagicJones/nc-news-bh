import {useState, useEffect} from "react"

import { fetchArticles } from '../utils/api.js'

import ArticleCard from './ArticleCard'

import Header from './Header'

import Footer from './Footer'


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
        return( <section>
        <p>...Finding all the NCnews Articles </p>
        <img id="logo" src='/src/images/bob-teaches-logo.svg'/>
        </section>
        )
    }

    return(
        <>
        <Header/>
        <ul>
        {articlesList.map((article)=>{
            return(
                <main key={article.article_id}>
                <ArticleCard article_id={article.article_id} author={article.author} title={article.title} topic={article.topic} created_at={article.created_at} votes={article.votes} article_img_url={article.article_img_url} comment_count={article.comment_count}></ArticleCard>
                </main>
            )
        })}
        </ul>
        <Footer/>
        </>
    )

}

export default ArticlesList;