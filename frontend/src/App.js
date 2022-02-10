import Home from "./components/home/Home";
import  React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from "./components/about/about";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
function App() {
return (
    <Router>
    <>
       <Navbar/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
                    

      </Routes>
  
   </>
   </Router>
  );
}

export default App;
