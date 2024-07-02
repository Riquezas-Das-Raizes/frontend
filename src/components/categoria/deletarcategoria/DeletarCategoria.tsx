import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { hotAlerta } from "../../../util/hotAlerta";

interface DeletarCategoriaProps {
  categoriaId: string;
  onClose: () => void;
  onDeleteSuccess: () => void;
}

function DeletarCategoria({ categoriaId, onClose, onDeleteSuccess }: DeletarCategoriaProps) {

  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          'Authorization': token
        }
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      hotAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token, navigate]);

  useEffect(() => {
    if (categoriaId !== undefined) {
      buscarPorId(categoriaId);
    }
  }, [categoriaId]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${categoriaId}`, {
        headers: {
          'Authorization': token
        }
      });

      hotAlerta('Categoria apagada com sucesso', 'sucesso');
      onDeleteSuccess();

    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      } else {
        hotAlerta('Erro ao deletar a categoria.', 'erro');
      }
    }

    setIsLoading(false);
  }

  return (
    <div className='container w-full mx-auto'>
      <div className='w-full flex flex-col justify-between'>
        <header 
          className='py-2 text-custom-green font-bold text-lg'>
          Deseja deletar a categoria ({categoria.nome})?
        </header>
        <div className="flex justify-end pt-2 gap-2">
          <button 
            className='text-slate-100 bg-custom-red w-20 py-2 rounded-md'
            onClick={onClose}>
            Não
          </button>
          <button 
            className='w-20 text-slate-100 bg-custom-green flex items-center justify-center rounded-md'
            onClick={deletarCategoria}>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
              <span>Sim</span>
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;

