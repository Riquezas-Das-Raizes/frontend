import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Categoria from "../../models/Categoria";
import { ShoppingBag, SignIn, SignOut, User, List, X } from "@phosphor-icons/react";
import { buscarCat } from "../../services/Service";
import ModalLogin from "../modal/modallogin/ModalLogin";
import ModalRegister from "../modal/modalregister/ModalRegister";
import { hotAlerta } from "../../util/hotAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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

  function logout() {
    handleLogout();
    hotAlerta("O usuário foi desconectado com sucesso!", 'sucesso');
    navigate("/");
  }

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <>
      <nav
        className={`bg-custom-green text-white shadow-xl py-4 px-6 flex-col justify-center items-center ${
          menuOpen && "mt-0"
        } mt-0 sm:mt-20 relative`}
      >
        <div className="flex justify-between w-full items-center sm:hidden">
          <Link to="/" className="flex justify-center items-center">
            <img
              src="https://imgur.com/X24BbNj.png"
              alt="Logo"
              className="w-20 h-auto"
            />
          </Link>
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <span title="Fechar menu">
                <X size={32} />
              </span>
            ) : (
              <span title="Abrir menu">
                <List size={32} />
              </span>
            )}
          </button>
        </div>

        <div className="hidden sm:flex justify-center items-center w-full pt-10 pb-2">
          <div className="flex flex-grow justify-end space-x-8 pr-10">
            <Link to="/" className="hover:underline hover:underline-offset-4">
              Home
            </Link>
            {categorias.map((categoria) => (
              <Link
                key={categoria.id}
                to={`/categorias/${categoria.id}`}
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
            <Link to="/artesaos" className="hover:underline hover:underline-offset-4">
              Artesãos
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
            <Link to="/cart" className="hover:underline">
              <span title="Carrinho">
                <ShoppingBag size={25} />
              </span>
            </Link>
            {usuario.token ? (
              <>
                <Link to="/perfil" className="hover:underline" title="Perfil">
                  <span title="Perfil">
                    <User size={25} />
                  </span>
                </Link>
                <Link
                  to=""
                  onClick={logout}
                  className="hover:underline"
                  title="Sair"
                >
                  <span title="Sair">
                    <SignOut size={25} />
                  </span>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={openLoginModal}
                >
                  <SignIn size={24} />
                </button>
              </>
            )}
          </div>
        </div>

        <div
          className={`sm:hidden ${
            menuOpen ? "block animate-fadeIn" : "hidden"
          } w-full`}
        >
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            {categorias.map((categoria) => (
              <Link
                key={categoria.id}
                to={`/categorias/${categoria.id}`}
                className="hover:underline"
              >
                {categoria.nome}
              </Link>
            ))}
            <Link to="/sobrenos" className="hover:underline">
              Sobre Nós
            </Link>
            <Link to="/artesaos" className="hover:underline">
              Artesãos
            </Link>
            <Link to="/cart" className="hover:underline" title="Carrinho">
            <span title="Carrinho">
            <ShoppingBag size={25} />
            </span>
            </Link>
            {usuario.token ? (
              <>
                <Link to="/perfil" className="hover:underline" title="Perfil">
                  <span title="Perfil">
                    <User size={25} />
                  </span>
                </Link>
                <Link
                  to=""
                  onClick={logout}
                  className="hover:underline"
                  title="Sair"
                >
                  <span title="Sair">
                    <SignOut size={25} />
                  </span>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={openLoginModal}
                >
                  <SignIn size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <ModalLogin
        triggerElement={<button className="hidden"></button>}
        isOpen={isLoginOpen}
        onClose={closeLoginModal}
        onRegisterClick={openRegisterModal}
      />
      <ModalRegister
        triggerElement={<button className="hidden"></button>}
        isOpen={isRegisterOpen}
        onClose={closeRegisterModal}
        onLoginClick={openLoginModal}
      />
    </>
  );
}

export default Navbar;
