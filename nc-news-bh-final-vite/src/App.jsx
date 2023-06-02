import './App.css'
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import IndividualArticle from './components/IndividualArticle'
import Nav from './components/Nav'
import {UserProvider} from './contexts/UserContext'

import CodingTopic from './components/CodingTopic'


function App() {

  return(
    <>
    <BrowserRouter>
    <Nav/>
    <UserProvider>
    <Routes>
    <Route path="/" element={<ArticlesList/>} />
    <Route path="/articles/:article_id" element={<IndividualArticle/>}  />
    <Route path="/coding" element={<CodingTopic/>}/>
    <Route path="/articles/topics/:topic" element={<ArticlesList/>}/>
    </Routes>
    </UserProvider>
    </BrowserRouter>
    </>
  )

}



export default App
