import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar } from "../../../services/Service";
import { hotAlerta } from "../../../util/hotAlerta";

interface FormEdicaoCategoriaProps {
  categoriaId: string;
  onClose: () => void;
  onUpdateSuccess: () => void;
}

function FormEdicaoCategoria({ categoriaId, onClose, onUpdateSuccess }: FormEdicaoCategoriaProps) {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token
        }
      });
    } catch (error: any) {
      if (error.toString().includes('401')) {
        hotAlerta('Token expirado!', 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      hotAlerta('Você precisa estar logado!', 'sucesso');
      navigate('/login');
    } else {
      buscarPorId(categoriaId);
    }
  }, [token, categoriaId, navigate]);

  function stateActually(event: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [event.target.name]: event.target.value
    });
  }

  async function updateCategory(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      await atualizar(`/categorias`, categoria, setCategoria, {
        headers: {
          'Authorization': token
        }
      });
      hotAlerta('Categoria atualizada com sucesso!', 'sucesso');
      onUpdateSuccess();
      onClose();
    } catch (error: any) {
      console.error('Error processing request:', error);
      if (error.toString().includes('401')) {
        hotAlerta('O token expirou!', 'info');
        handleLogout();
      } else {
        hotAlerta('Erro ao processar a solicitação!', 'erro');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl">Editar Categoria</h1>
      <form className="flex flex-col gap-4 p-0 items-end" onSubmit={updateCategory}>
        <input
          type="text"
          placeholder="Nome da Categoria"
          name='nome'
          className="border-2 border-slate-700 rounded p-2 mt-1"
          value={categoria.nome || ''}
          onChange={stateActually}
        />
        <button className="rounded text-slate-100 bg-custom-green hover:bg-custom-emerald py-2 px-5 flex justify-end w-30" type="submit">
          {
            isLoading ? (
              <RotatingLines strokeColor='white' strokeWidth='5' animationDuration='0.75' width='24' visible={true} />
            ) : (
              <span>Atualizar</span>
            )
          }
        </button>
      </form>
    </div>
  );
}

export default FormEdicaoCategoria;
