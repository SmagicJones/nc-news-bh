import axios from "axios";

const ncNewsAPI = axios.create({
    baseURL: "https://nc-news-bh.onrender.com/api/",
})

function fetchArticles(topic){
    return ncNewsAPI
    .get("/articles", {
        params: {
            topic: topic
        }
    })
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

// function fetchArticlesByTopic(topic){
//     return ncNewsAPI
//     .get(`/articles?topic=${topic}`)
//     .then((res)=>{
//         return res.data
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

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


function postComment(newComment, article_id){
    return ncNewsAPI
    .post(`/articles/${article_id}/comments`, newComment)
    .then((res)=>{
        return res.data
    })
    
}

function fetchUsers(){
    return ncNewsAPI
    .get(`/users`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

function fetchTopics(){
    return ncNewsAPI
    .get(`/topics`)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}



export {fetchArticles, fetchArticle, fetchComments, voter, postComment, fetchUsers, fetchTopics }

