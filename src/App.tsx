import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Sobrenos from "./pages/sobrenos/Sobrenos";
import Contatos from "./pages/contatos/Contatos";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListarCategorias from "./components/categoria/listarcategorias/ListarCategorias";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/contatos" element={<Contatos />}/>
              <Route path="/sobrenos" element={<Sobrenos />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/cadastrar" element={<Cadastro />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
