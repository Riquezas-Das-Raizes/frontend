import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Sobrenos from "./pages/sobrenos/Sobrenos"
import Contatos from "./pages/contatos/Contatos"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contatos" element={<Contatos />}/>
            <Route path="/sobrenos" element={<Sobrenos />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App 