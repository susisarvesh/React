import "./App.css";
import Todo from "./Components/Todo";
import Calculator from "./Components/Calculator";
import WeatherApp from "./Components/WeatherApp";
import Clock from "./Components/Clock";
import RandomQuote from "./Components/RandomQuote";
import MineSarvs from "./Components/MineSarvs";
import ImageGallery from "./Components/ImageGallery";
import Recipie from "./Components/Recipie";
import Quiz from "./Components/Quiz";
import ExpenseTracker from "./Intermediate/ExpenseTracker";
import Practice from "./Intermediate/useReducer/Practice";
import CoinuseReducer from "./Intermediate/useReducer/CoinuseReducer";
import MarkDownPreview from "./Intermediate/MarkDownPreview";
import ReactForms from "./Intermediate/ReactForms";
import Routing from "./Intermediate/Routing";
import MovieRecommendation from "./Intermediate/MovieRecommendation";
import Dragdrop from "./Intermediate/Dragdrop";
import DarkTheme from "./Intermediate/DarkTheme";
import Pagination from "./Intermediate/Pagination";
import Modal from "./Intermediate/Modal";
import ToolKit from "./Intermediate/ToolKit";
import ShoppingCart from "./Projects/ShoppingCart"
import { useState } from "react";
import ShopApi from "./Projects/ShopApi";
import AddTask from "./Projects/AddTask";
import ZustandCounter from "./Projects/ZustandCounter";
import TaskManager from "./Projects/TaskLite";
import ExpenseSplitter from "./Redux/ExpenseSplitter";
import { Provider } from "react-redux";
import {expense} from "./Redux/ReduxStore/store"
import Select from "./InterviewQues/Select";
import Checkbox from "./InterviewQues/checkbox";
import ContextApi from "./InterviewQues/ContextApi";
import TrueorFalse from "./InterviewQues/TrueorFalse";
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
    "Kochi",
  ];

  const [show, setShow] = useState(false);

  return (
    <div className="p-8">
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
      <DarkTheme></DarkTheme>
      <Pagination></Pagination>
      <Modal></Modal>
      <ToolKit>
        <div>
        <button onClick={() => setShow(true)}>Hover Toolkit</button>
        </div>
      </ToolKit>
      <ShopApi></ShopApi>
      <AddTask></AddTask>
      <ZustandCounter></ZustandCounter>
      <TaskManager></TaskManager>

       <Provider store={expense}>
      <ExpenseSplitter></ExpenseSplitter>
      </Provider>
       <Select></Select>
      <Checkbox></Checkbox>
    
     
      <ContextApi>
        <TrueorFalse></TrueorFalse>
      </ContextApi>
     
    </div>
  );
}

export default App;
