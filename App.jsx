import Navbar from "./comp/navbar.jsx";
import NewsBoard from "./comp/newsBoard.jsx";
import {useState} from "react";
const App = () => {
  const[category ,setCategory] = useState("general");
  return (
    <div className="app">
      <Navbar  setCategory={setCategory}/>
      <NewsBoard category={category} />
    </div>
  )
}

export default App;