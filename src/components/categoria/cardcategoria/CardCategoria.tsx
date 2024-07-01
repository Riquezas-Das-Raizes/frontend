import Categoria from "../../../models/Categoria";
import { Pencil, Trash } from "@phosphor-icons/react";

interface CardCategoriaProps {
  categoria: Categoria;
  onDeleteClick: () => void;
  onEditClick: () => void; // Novo prop
}

function CardCategoria({ categoria, onDeleteClick, onEditClick }: CardCategoriaProps) {
  return (
    <div className="w-full overflow-auto">
      <ul className="px-6 rounded-md overflow-auto h-full">
        <li className="mb-4 border-b border-gray-200 ">
          <div className="flex justify-between items-center p-3">
            <h3 className="font-bold">{categoria.nome}</h3>
            <div className="font-bold flex justify-end">
              <button
                onClick={onEditClick}
                className="w-7 text-slate-100 flex items-center justify-center py-2"
                title="Editar categoria"
              >
                <Pencil size={25} className="text-custom-green" />
              </button>

              <button
                onClick={onDeleteClick}
                className="w-7 text-slate-100 flex items-center justify-center"
                title="Deletar categoria"
              >
                <Trash size={25} className="text-custom-red" />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CardCategoria;
