import React from 'react'
import './styles/global.css'
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';
import PreparationTime from './components/PreparationTime/PreparationTime';

const App = () => {
  return (
    <>
      <Header />
      <Recipes />
      <PreparationTime />
    </>
  )
}

export default App