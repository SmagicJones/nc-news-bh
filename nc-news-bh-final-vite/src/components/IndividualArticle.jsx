import {useState, useEffect} from 'react';
import{useParams} from 'react-router-dom';
import {fetchArticle} from '../utils/api.js';


import ArticleFullInfo from './ArticleFullinfo';


const IndividualArticle = ()=>{
    const {article_id} = useParams()
    


    const [articleInfo, setArticleInfo] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    

    useEffect(()=>{
        fetchArticle(article_id).then((data)=>{
            const article = data.article[0]
            setArticleInfo(article)
            setIsLoading(false)
        })

    }, [])

    

    if(isLoading){
        return <section>
        <p>...Pulling up your chosen NCnews Articles </p>
        <img id="logo" src='/src/images/bob-teaches-logo.svg'/>
        </section>
    }
    
    return (
        <ArticleFullInfo article_id={articleInfo.article_id} title={articleInfo.title} topic={articleInfo.topic} author={articleInfo.author} body={articleInfo.body} created_at={articleInfo.created_at} votes={articleInfo.votes} article_img_url={articleInfo.article_img_url}/>
    )

}

export default IndividualArticle