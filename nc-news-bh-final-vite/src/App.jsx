import './App.css'
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import IndividualArticle from './components/IndividualArticle'
import Nav from './components/Nav'


function App() {

  return(
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<ArticlesList/>} />
    <Route path="/articles/:article_id" element={<IndividualArticle/>}  />
    </Routes>
    </BrowserRouter>
    </>
  )

}



export default App
