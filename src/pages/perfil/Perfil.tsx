import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import login from "../../assets/login.jpg";

function Perfil() {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
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
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-custom-green text-white text-2xl items-center justify-center">
        <p>{usuario.nome}</p>
        <p>{usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;
