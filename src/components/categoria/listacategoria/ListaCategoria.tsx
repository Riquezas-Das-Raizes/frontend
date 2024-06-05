import { useContext, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useNavigate } from "react-router-dom"; // Uncomment if navigation is needed
import { DNA } from "react-loader-spinner";
import { hotAlerta } from "../../../util/hotAlerta";

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
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
  }, [token]);

  useEffect(() => {
    listar();
  }, [categorias.length]);

  return (
    <>
    {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
      <div className="flex m-2 justify-center align-center p-16">
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </>
  );
}

export default ListaCategoria;
