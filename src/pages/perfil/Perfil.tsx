import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import login from "../../assets/login.jpg";
import ModalProduct from "../../components/products/modalproducts/ModalProducts";
import { hotAlerta } from "../../util/hotAlerta";

function Perfil() {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario.token === "") {
      hotAlerta("Você precisa estar logado", 'info');
      navigate("/login");
    }
  }, [usuario.token, navigate]);

  return (
    <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
      <img
        className="w-full h-72 object-cover border-b-8 border-white"
        src={login}
        alt="Capa do Perfil"
      />
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10 transition duration-300 ease-in-out hover:brightness-50"
      />
      <div className="relative mt-[-6rem] h-64 flex flex-col bg-custom-bg-secondary text-black text-2xl items-center justify-center">
        <p>{usuario.nome}</p>
        <p>{usuario.usuario}</p>
      </div>
      {usuario.admin && (
        <div className="flex justify-around gap-4 ">
          <div className="flex flex-col justify-around gap-4">
            <ModalProduct />
            <Link
              to="/produtos"
              className="text-center rounded font-bold text-yellow-900  border-yellow-900 hover:bg-yellow-900 hover:text-white border-solid  border-2 py-2  px-4"
            >
              Listar Produtos
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Perfil;
