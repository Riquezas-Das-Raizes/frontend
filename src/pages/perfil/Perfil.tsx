import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ModalProduct from "../../components/products/modalproducts/ModalProducts";
import ModalCategoria from "../../components/categoria/modalcategoria/ModalCategoria";
import { hotAlerta } from "../../util/hotAlerta";
import ModalListarCategoria from "../../components/categoria/modallistarcategoria/ModalListarCategoria";

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
      <div className=" bg-custom-green w-full h-72 object-cover border-b-8 border-white"></div>
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10 transition duration-300 ease-in-out hover:brightness-50"
      />
      <div className="relative mt-[-6rem] pt-28 pb-10 flex flex-col bg-custom-bg-secondary text-black text-2xl items-center justify-center">
        <p className="font-bold">{usuario.nome}</p>
      </div>
      {usuario.admin && (
        <>
          <div className="rounded-3xl border-custom-green border-dotted border flex flex-col w-2/4 m-auto">

            <h2 className="text-center font-bold text-2xl my-3">Produtos</h2>
            <div className="flex justify-around gap-4 mb-5">
              <div className="flex justify-center gap-4">
                <ModalProduct/>
                <Link to="/produtos" className='text-center rounded font-bold text-custom-emerald  border-custom-green hover:bg-custom-emerald hover:text-white border-solid  border-2 py-2 px-4'>Listar Produtos</Link>
              </div>
            </div>

            <h2 className="text-center font-bold text-2xl my-3">Categorias</h2>
            <div className="flex justify-around gap-4 mb-5">
              <div className="flex justify-around gap-4">
                <ModalCategoria/>
                {/* <Link to="/categorias" className='text-center rounded font-bold text-custom-emerald  border-custom-green hover:bg-custom-emerald hover:text-white border-solid  border-2 py-2  px-4'>Listar Categoria</Link> */}
                <ModalListarCategoria/>
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default Perfil;
