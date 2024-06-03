import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <nav className="bg-custom-bg py-4 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="src\assets\img\logo.png"
            alt="Logo"
            className="w-16 h-auto mr-2"
          />
          <span className="text-custom-text font-semibold">
            Riqueza das Raízes
          </span>
        </Link>
        <div className="flex space-x-6 text-custom-text">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <div className="hover:underline">Produtos</div>

          <Link to="/categorias" className="hover:underline">Categorias</Link>
          <Link to="/cadastrarCategoria" className="hover:underline">Cadastrar Categoria</Link>
          <Link to="/sobrenos" className="hover:underline">Sobre Nós</Link>
          <Link to="/contatos" className="hover:underline">Contatos</Link>

          {usuario.token ? (
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          ) : (
            <Link to="/login" className="hover:underline">
              Faça login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
