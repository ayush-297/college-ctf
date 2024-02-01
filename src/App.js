import React from 'react'
// import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Pagenotfound from './pages/Pagenotfound'
import Events from './pages/Events'
import Challenges from './pages/challenges'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/Contact" element={<Contact></Contact>}/>
          <Route path="/events" element={<Events></Events>}/>
          <Route path="/challenges" element={<Challenges></Challenges>}/>
          <Route path="*" element={<Pagenotfound></Pagenotfound>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App