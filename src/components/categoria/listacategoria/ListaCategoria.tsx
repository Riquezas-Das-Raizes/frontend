import { useContext, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { hotAlerta } from "../../../util/hotAlerta";
import ModalDeleteCategory from "../../modal/modaldelete/ModalDeleteCategory";
import ModalEditCategory from "../../modal/modaledit/ModalEditCategory"; 

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false); 
  const [categoriaId, setCategoriaId] = useState<string>("");
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  let navigate = useNavigate();

  async function listar() {
    try {
      await buscar("/categorias", setCategorias, {
        Authorization: token,
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        hotAlerta("O token expirou, favor logar novamente", 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      hotAlerta("Você precisa estar logado", 'info');
      navigate("/login");
    } else {
      listar();
    }
  }, [token, navigate]);

  useEffect(() => {
    listar();
  }, []);

  function handleDeleteClick(id: string) {
    setCategoriaId(id);
    setModalIsOpen(true);
  }

  function handleEditClick(id: string) {
    setCategoriaId(id);
    setEditModalIsOpen(true);
  }

  function handleDeleteSuccess(id: string) {
    setCategorias(prevCategorias => prevCategorias.filter(categoria => categoria.id !== id));
    setModalIsOpen(false);
  }

  function handleUpdateSuccess() {
    listar();
    setEditModalIsOpen(false);
  }

  return (
    <>
      <div className="flex justify-center items-center">
        {categorias.length === 0 && (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#74884F"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
      </div>
      <div className="flex flex-col bg-white rounded-lg">
        {categorias.map((categoria) => (
          <CardCategoria
            key={categoria.id}
            categoria={categoria}
            onDeleteClick={() => handleDeleteClick(categoria.id)}
            onEditClick={() => handleEditClick(categoria.id)}
          />
        ))}
      </div>
      {modalIsOpen && (
        <ModalDeleteCategory
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          categoriaId={categoriaId}
          onDeleteSuccess={() => handleDeleteSuccess(categoriaId)}
          triggerElement={<button></button>}
        />
      )}
      {editModalIsOpen && (
        <ModalEditCategory
          isOpen={editModalIsOpen}
          onClose={() => setEditModalIsOpen(false)}
          categoriaId={categoriaId}
          onUpdateSuccess={handleUpdateSuccess}
          triggerElement={<button></button>}
        />
      )}
    </>
  );
}

export default ListaCategoria;
