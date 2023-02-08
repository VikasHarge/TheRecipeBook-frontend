import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Cuisine from './Cuisine'
import HomePage from './HomePage'

const Pages = () => {
  return (
    <>
        <SearchBar/>
        <Routes> 
            <Route index path='/' element={<HomePage/>}/>
            <Route path='/cusines' element={<Cuisine/>}/>        
        </Routes>
    </>
  )
}

export default Pages