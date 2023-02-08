import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Cuisine from './Cuisine'
import HomePage from './HomePage'
import RecipeDetail from './RecipeDetail'
import RecipIngridients from './RecipeIngridients'
import RecipeName from './RecipeName'

const Pages = () => {
  return (
    <>
        <SearchBar/>
        <Routes> 
            <Route index path='/' element={<HomePage/>}/>
            <Route path='/cusines/:cuisineType' element={<Cuisine/>}/>    
            <Route path='/names/:name' element={<RecipeName/>}/>    
            <Route path='/ingridients/:ingridient' element={<RecipIngridients/>}/>    
            <Route path='/recipe/:recipeId' element={<RecipeDetail/>}/> 
        </Routes>
    </>
  )
}

export default Pages