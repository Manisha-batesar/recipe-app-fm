import React from 'react'
import './styles/global.css'
import Header from './components/Header/Header';
import Recipes from './components/Recipes/Recipes';

const App = () => {
  return (
    <>
      <Header />
      <Recipes />
    </>
  )
}

export default App