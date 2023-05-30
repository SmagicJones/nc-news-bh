import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import Nav from './components/Nav'

function App() {
  return(
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<ArticlesList/>} />
    </Routes>
    </BrowserRouter>
    </>
  )

}



export default App
