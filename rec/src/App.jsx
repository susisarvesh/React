import { useState } from 'react'

import './App.css'
import Todo from './Components/Todo'
import Calculator from './Components/Calculator'
import WeatherApp from './Components/WeatherApp'

function App() {
 

  return (
    <>
      <div className='p-8'>
        {/* <Todo></Todo> */}
        {/* <Calculator></Calculator> */}
        <WeatherApp></WeatherApp>
        </div>
    </>
  )
}

export default App
