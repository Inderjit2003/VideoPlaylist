import React from 'react'
import TutorialList from './TutorialList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import VideoPlayer from './VideoPlayer'

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/video' element={ <VideoPlayer /> }></Route>
     </Routes>
    </BrowserRouter>
  )
}
