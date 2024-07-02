import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { hotAlerta } from "../../../util/hotAlerta";
import PerfilComum from "../perfilcomum/PerfilComum";
import PerfilAdmin from "./PerfilAdmin";


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
      <div className=" bg-custom-green w-full h-48 object-cover border-b-8 border-white"></div>
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="rounded-full w-40 mx-auto mt-[-8rem] border-8 border-white relative z-10 transition duration-300 ease-in-out hover:brightness-50"
      />
      {usuario.admin ? (
        <>
        <PerfilAdmin/>
          
        </>
      ):
      (
        <PerfilComum/>
      )}
    </div>
  );
}

export default Perfil;
