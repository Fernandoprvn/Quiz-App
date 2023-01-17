import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from './Component/Registration';
import Quiz from './Component/Quiz';
import { useState } from 'react';
import Error from './Component/Error';

function App() {
  const[loggedIn,setLoggedIn]=useState(false);
  console.log(loggedIn)
  return (
    <div className="App">
      <>
       <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Registration setLoggedIn={setLoggedIn}/>}/>
        <Route exact path="/quiz" element={localStorage.getItem("isLogged")?<Quiz/>:<Registration setLoggedIn={setLoggedIn}/>}/>
        <Route exact path ="/*" element={<Error/>}/>
       </Routes>
       </BrowserRouter>
      </>  
    </div>
  );
}

export default App;

