import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Categoria from "../../models/Categoria";
import { ShoppingBag, SignOut, User } from "@phosphor-icons/react";
import { buscarCat } from "../../services/Service";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  function logout() {
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/");
  }

  useEffect(() => {
    async function listar() {
      try {
        await buscarCat("/categorias", setCategorias, {});
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }
    listar();
  }, []);

  return (
    <>
      <nav className="bg-custom-green text-white shadow-xl py-5 px-6 flex-col justify-center items-center rounded-full mx-20 mt-20 relative">
        <div className="flex justify-center pt-10">
          <Link to="/" className="absolute inset-x-0 top-1/2 transform -translate-y-full flex justify-center items-center">
            <img
              src="src/assets/img/logo.png"
              alt="Logo"
              className="w-52 h-auto"
            />
          </Link>
        </div>

        <div className="flex justify-center gap-20">
          <div className="space-x-8">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            {categorias.map((categoria) => (
              <Link key={categoria.id} to={`/categoria/${categoria.id}`} className="hover:underline">
                {categoria.nome}
              </Link>
            ))}
            <Link to="/sobrenos" className="hover:underline">
              Sobre Nós
            </Link>
            <Link to="#" className="hover:underline">
              Artesões
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="#" className="hover:underline">
              <ShoppingBag size={25} />
            </Link>
            {usuario.token ? (
              <Link to="" onClick={logout} className="hover:underline">
                <SignOut size={25} />
              </Link>
            ) : (
              <Link to="/Login" className="hover:underline">
                <User size={25} />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
