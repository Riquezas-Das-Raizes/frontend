import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Sobrenos from "./pages/sobrenos/Sobrenos"
import Contatos from "./pages/contatos/Contatos"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contatos" element={<Contatos />}/>
            <Route path="/sobrenos" element={<Sobrenos />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App 