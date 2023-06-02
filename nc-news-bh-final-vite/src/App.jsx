import './App.css'
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import IndividualArticle from './components/IndividualArticle'
import Nav from './components/Nav'
import {UserProvider} from './contexts/UserContext'


function App() {

  return(
    <>
    <BrowserRouter>
    <Nav/>
    <UserProvider>
    <Routes>
    <Route path="/" element={<ArticlesList/>} />
    <Route path="/articles/:article_id" element={<IndividualArticle/>}  />
    </Routes>
    </UserProvider>
    </BrowserRouter>
    </>
  )

}



export default App
