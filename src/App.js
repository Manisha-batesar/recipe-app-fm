import React from 'react'
import './styles/global.css'
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';
import PreparationTime from './components/PreparationTime/PreparationTime';
import Ingredients from './components/Ingredients/Ingredients';

const App = () => {
  return (
    <>
      <Header />
      <Recipes />
      <PreparationTime />
      <Ingredients />
    </>
  )
}

export default App