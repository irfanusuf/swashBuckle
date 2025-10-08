import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "./pages/HeroSection"
import Register from "./pages/Register"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "./redux/Actions/UserActions"
import type { AppDispatch } from "./redux/Store"
import Login from "./pages/Login"
import type { User } from "./assets/types/Types"




function App() {

  const dispatch = useDispatch<AppDispatch>()


  useEffect(() => {

    dispatch(fetchUser())

  })



  const user : User = useSelector((state : any ) => state.user)



  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<HeroSection username={user.username} />} />
          <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login />} />


        </Routes>


      </BrowserRouter>



    </>
  )
}

export default App
