import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes ,Route ,Link } from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'
import { NotFound } from './error'
import { Home } from './home'
import { Details } from './postdetails'
import { NewPost } from './postNew'




function App() {
  return (
    <>
    <nav>
      <Link to='/header'>header</Link> ||
      <Link to='/footer'>footer</Link> ||
      <Link to='/'>Home</Link> ||
      <Link to='/post/details/:id'>Post Details</Link> ||
      <Link to='/post/new'>New Post</Link> 
     
    </nav>
     
    <Routes>
      <Route path='/header'  element={<Header />}/>
      <Route path='/footer'  element={<Footer />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />

      <Route path='/post'>
        <Route path='details/:id' element={<Details />} />
        <Route path='new' element={<NewPost />} />
      </Route>
     
    </Routes>
</>    
  )
}

export default App
