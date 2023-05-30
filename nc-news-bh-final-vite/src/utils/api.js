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

export {fetchArticles}