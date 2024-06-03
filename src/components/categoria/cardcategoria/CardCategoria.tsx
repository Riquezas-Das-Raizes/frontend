import { Link, useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-[rgb(218,20,0)] text-white font-bold text-2xl">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>

        <div className="flex">
          <Link
            to={`/editarcategoria/${categoria.id}`}
            className="w-full text-slate-100 bg-[rgb(254,156,0)] hover:bg-[rgb(254,184,69)]
                        flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>

          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className="text-slate-100 bg-red-900 hover:bg-[rgb(218,20,0)] w-full 
                        flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
    </div>
  );
}

export default CardCategoria;
