import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";


interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-[#ADC178] text-white font-bold text-2xl">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.name}</p>

        <div className="flex">
          <Link
            to={`/editarcategoria/${categoria.id}`}
            className="w-full text-slate-100 bg-yellow-700 hover:bg-yellow-900
                        flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>

          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className="text-slate-100 bg-red-700 hover:bg-[rgb(218,20,0)] w-full 
                        flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
    </div>
  );
}

export default CardCategoria;
