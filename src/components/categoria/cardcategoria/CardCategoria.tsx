import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { Pencil, Trash } from "@phosphor-icons/react";


interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    
    <div 
    className="border flex flex-col text-center overflow-hidden justify-between mx-3 w-full rounded-xl shadow-2xl shadow-lime-400"
    >
      <header 
      className="py-2 px-6 bg-custom-green text-white font-bold text-2xl underline italic"
      >
        Categoria
      </header>
      <p className="p-8 text-3xl bg-custom-beige h-full">{categoria.nome}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-custom-green hover:bg-green-900
                        flex items-center justify-center py-2" title="Editar categoria"
        >
          <button><Pencil size={25}  /></button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-slate-100 bg-red-900 hover:bg-custom-red w-full 
                        flex items-center justify-center" title="Deletar categoria"
        >
          <button><Trash size={25} /></button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
