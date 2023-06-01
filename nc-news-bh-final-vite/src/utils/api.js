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

function fetchComments(article_id){
    return ncNewsAPI
    .get(`/articles/${article_id}/comments`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

function voter(article_id, vote){
    return ncNewsAPI
    .patch(`/articles/${article_id}`, {inc_votes: vote,})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}



// function postComment(newComment, article_id){
//     return ncNewsAPI
//     .post(`/articles/${article_id}/comments`, newComment)

// }

export {fetchArticles, fetchArticle, fetchComments, voter}