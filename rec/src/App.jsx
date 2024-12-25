

import './App.css'
import Todo from './Components/Todo'
import Calculator from './Components/Calculator'
import WeatherApp from './Components/WeatherApp'
import Clock from './Components/Clock'
import RandomQuote from './Components/RandomQuote'
import MineSarvs from './Components/MineSarvs'
import ImageGallery from './Components/ImageGallery'
import Recipie from './Components/Recipie'
import Quiz from './Components/Quiz'
import ExpenseTracker from './Intermediate/ExpenseTracker'
import Practice from './Intermediate/useReducer/Practice'
import CoinuseReducer from './Intermediate/useReducer/CoinuseReducer'
import MarkDownPreview from './Intermediate/MarkDownPreview'
import ReactForms from './Intermediate/ReactForms'
import Routing from './Intermediate/Routing'
import MovieRecommendation from './Intermediate/MovieRecommendation'
import Dragdrop from './Intermediate/Dragdrop'

function App() {
const Cities = [
  "Chennai",
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Surat",
  "Nagpur",
  "Bhopal",
  "Patna",
  "Vadodara",
  "Coimbatore",
  "Visakhapatnam",
  "Kochi"
];
 

  return (
    <>
      <div className='p-8'>
        
        <MineSarvs></MineSarvs>
        
       <Todo></Todo>
        <Calculator></Calculator>
        <WeatherApp></WeatherApp>
        <Clock></Clock>
        <RandomQuote></RandomQuote>
        <ImageGallery arr={Cities}></ImageGallery>
        <Recipie />
        <Quiz />
         <Practice></Practice>
        <ExpenseTracker />
        <CoinuseReducer></CoinuseReducer>
        <MarkDownPreview />
          <ReactForms />
        <Routing />
        <MovieRecommendation />
        <Dragdrop />
         </div>
    </>
  )
}

export default App
