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



function upVote(article_id){
    return ncNewsAPI
    .patch(`/articles/${article_id}`, {inc_votes: 1,})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

function downVote(article_id){
    return ncNewsAPI
    .patch(`/articles/${article_id}`, {inc_votes: -1,})
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

function postComment(newComment, article_id){
    return ncNewsAPI
    .post(`/articles/${article_id}/comments`, newComment)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })

}

export {fetchArticles, fetchArticle, fetchComments, upVote, downVote, postComment}