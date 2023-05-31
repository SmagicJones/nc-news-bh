import axios from "axios";

const ncNewsAPI = axios.create({
    baseURL: "https://nc-news-bh.onrender.com/api/",
})

function fetchArticles(){
    return ncNewsAPI
    .get("/articles")
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

function fetchArticle(article_id){
    return ncNewsAPI
    .get(`/articles/${article_id}`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export {fetchArticles, fetchArticle}