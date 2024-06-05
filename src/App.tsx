import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Sobrenos from "./pages/sobrenos/Sobrenos";
import Contatos from "./pages/contatos/Contatos";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Perfil from "./pages/perfil/Perfil";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import DeleteProduct from "./components/products/deleteproducts/DelProducts";
import FormProduct from "./components/products/formproducts/FormProducts";
import ListProductsAdmin from "./components/products/listproductsadmin/ListProductsAdmin";
import ListProducts from "./components/products/listproducts/ListProducts";
import { Toaster } from "react-hot-toast";
import ProductCategory from "./components/products/productCategory/ProductCategory";

function App() {
  return (
    <>
      <AuthProvider>
        <Toaster/>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/sobrenos" element={<Sobrenos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/categorias/:id" element={<ProductCategory />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            {/* <Route path="/produtos" element={<ListProductsAdmin />} /> */}
            <Route path="/produtos" element={<ListProducts />} />
            {/* <Route path="/produtos/:nome" element={<ListProducts />} /> */}
            <Route path="/deletarproduto/:id" element={<DeleteProduct />} />
            <Route path="/cadastrarproduto" element={<FormProduct />} />
            <Route path="/editarproduto/:id" element={<FormProduct />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
