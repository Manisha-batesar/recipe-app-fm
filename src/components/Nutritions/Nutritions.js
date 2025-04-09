import React from 'react'
import './Nutritions.css'

const Nutritions = () => {
  return (
    <div className='nutritions'>
      <h2>Nutritions</h2>
      <h6>The table below shows nutritional values per serving without the additional fillings.</h6>
      <div className='allNutritions'>
        <p>Calories<span>277kcal</span></p><hr/>
        <p>Carbs<span>0g</span></p><hr/>
        <p>Protein<span>20g</span></p><hr/>
        <p>Fat<span>22g</span></p>
      </div>
    </div>
  )
}

export default Nutritions