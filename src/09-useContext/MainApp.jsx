import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./Navbar"


export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        {/* https://reactrouter.com/en/main/start/overview */}
        <Navbar/>
        <hr />
      
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            {/* <Route path="/*" element={<LoginPage/>}/> */}
            <Route path="/*" element={<Navigate to="/about"/>}/>
        
        </Routes>
    </>
  )
}