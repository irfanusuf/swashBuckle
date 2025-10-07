import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "./pages/HeroSection"
import Register from "./pages/Register"




function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element ={<HeroSection username="tehleem"/>}/>
        <Route path="/user/register" element={<Register/>} />


      </Routes>
    
    
    </BrowserRouter>


      
    </>
  )
}

export default App
