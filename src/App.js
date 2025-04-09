import React from 'react'
import './styles/global.css'
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';
import PreparationTime from './components/PreparationTime/PreparationTime';
import Ingredients from './components/Ingredients/Ingredients';
import Instructions from './components/Instructions/Instructions';
import Nutritions from './components/Nutritions/Nutritions';

const App = () => {
  return (
    <>
      <Header />
      <Recipes />
      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutritions />
    </>
  )
}

export default App