import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Categoria from "../../models/Categoria";
import { ShoppingCartSimple, SignOut, User } from "@phosphor-icons/react";
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
          <Link
            to="/"
            className="absolute inset-x-0 top-1/2 transform -translate-y-full flex justify-center items-center"
          >
            <img
              src="src/assets/img/logo.png"
              alt="Logo"
              className="w-52 h-auto"
            />
          </Link>
        </div>

        <div className="flex justify-center gap-20 font-semibold">
          <div className="space-x-8 ">
            <Link
              to="/"
              className="hover:underline hover:underline-offset-4
"
            >
              Home
            </Link>
            {categorias.map((categoria) => (
              <Link
                key={categoria.id}
                to={`/categoria/${categoria.id}`}
                className="hover:underline hover:underline-offset-4"
              >
                {categoria.nome}
              </Link>
            ))}
            <Link
              to="/sobrenos"
              className="hover:underline hover:underline-offset-4"
            >
              Sobre Nós
            </Link>
            <Link to="#" className="hover:underline hover:underline-offset-4">
              Artesões
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              to="#"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            >
              <ShoppingCartSimple size={25} />
            </Link>
            {usuario.token ? (
              <>
                <Link
                  to="/perfil"
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
                >
                  <User size={25} />
                </Link>
                <Link
                  to=""
                  onClick={logout}
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110
"
                >
                  <SignOut size={25} />
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className=" transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
              >
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
