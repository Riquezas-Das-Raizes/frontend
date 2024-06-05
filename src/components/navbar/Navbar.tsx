import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Categoria from "../../models/Categoria";
import { ShoppingBag, SignIn, SignOut, User, List, X } from "@phosphor-icons/react";
import { buscarCat } from "../../services/Service";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <nav className={`bg-custom-green text-white shadow-xl py-4 px-6 flex-col justify-center items-center sm:rounded-full ${menuOpen ? 'rounded-3xl' : 'rounded-full'} sm:mx-20 mt-4 sm:mt-20 relative mx-4`}>
        <div className="flex justify-between w-full items-center sm:hidden">
          <Link to="/" className="flex justify-center items-center">
            <img
              src="https://imgur.com/X24BbNj.png"
              alt="Logo"
              className="w-20 h-auto"
            />
          </Link>
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <List size={32} />}
          </button>
        </div>

        <div className="hidden sm:flex justify-center items-center w-full pt-10 pb-2">
          <div className="flex flex-grow justify-end space-x-8 pr-10">
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
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-full flex justify-center items-center">
            <Link to="/" className="flex justify-center items-center">
              <img
                src="https://imgur.com/X24BbNj.png"
                alt="Logo"
                className="w-28 h-auto"
              />
            </Link>
          </div>
          <div className="flex flex-grow justify-start space-x-4 pl-10">
            <Link to="#" className="hover:underline">
              <ShoppingBag size={25} />
            </Link>
            {usuario.token ? (
              <>
                <Link to="/perfil" className="hover:underline" title="Perfil">
                  <User size={25} />
                </Link>
                <Link to="" onClick={logout} className="hover:underline" title="Sair">
                  <SignOut size={25} />
                </Link>
              </>
            ) : (
              <Link to="/Login" className="hover:underline" title="Login">
                <SignIn size={25} />
              </Link>
            )}
          </div>
        </div>

        <div className={`sm:hidden ${menuOpen ? "block animate-fadeIn" : "hidden"} w-full`}>
          <div className="flex flex-col items-center space-y-4">
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
            <Link to="#" className="hover:underline">
              <ShoppingBag size={25} />
            </Link>
            {usuario.token ? (
              <>
                <Link to="/perfil" className="hover:underline" title="Perfil">
                  <User size={25} />
                </Link>
                <Link to="" onClick={logout} className="hover:underline" title="Sair">
                  <SignOut size={25} />
                </Link>
              </>
            ) : (
              <Link to="/Login" className="hover:underline" title="Login">
                <SignIn size={25} />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
