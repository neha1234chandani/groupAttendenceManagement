import Header from "./header";
 import './App.css'
import Login from "./login";
import Signup from "./signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element = {<Login />} />
          <Route path="/signup" element = {<Signup />} />
        </Routes>
    </BrowserRouter>
    
    </>
         )
}
export default App ; 


