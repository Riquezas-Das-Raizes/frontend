import { useState, useContext, useEffect, ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import Product from "../../../models/Produto";
import {
  buscar,
  atualizar,
  cadastrarProd,
  buscarCat,
} from "../../../services/Service";
import { hotAlerta } from "../../../util/hotAlerta";

function FormProduct() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: "" });
  const [product, setProduct] = useState<Product>({
    id: 0,
    nome: "",
    preco: 0,
    imagem: "",
    descricao: "",
    categoria: null,
    usuario: null,
  });

  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProductPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduct, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  async function buscarCategorias() {
    try {
      await buscarCat(
        "/categorias",
        (data: Categoria[]) => {
          setCategorias(data);
        },
        {
          headers: { Authorization: token },
        },
      );
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProductPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      categoria: categoria,
    }));
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovaProduct(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const productData = {
      ...product,
      categoria: categoria,
      usuario: usuario,
    };

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, productData, setProduct, {
          headers: {
            Authorization: token,
          },
        });
        hotAlerta("Produto atualizado com sucesso", "sucesso");
      } catch (error: any) {
        hotAlerta("Erro ao atualizar o produto:", "erro");
        if (error.toString().includes("403")) {
          handleLogout();
        }
      }
    } else {
      try {
        await cadastrarProd(`/produtos`, productData, setProduct, {
          headers: {
            Authorization: token,
          },
        });
        hotAlerta("Produto cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        hotAlerta("Erro ao cadastrar o produto", "erro");
        if (error.toString().includes("403")) {
          handleLogout();
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.nome === "";

  return (
    <div className={`container flex flex-col mx-auto items-center bg-white rounded-lg shadow-lg px-10 py-5 ${id !== undefined ? 'w-1/2' : 'w-full'}`}>
  <h1 className={`text-4xl text-center ${id !== undefined ? 'my-0' : ''}`}>
  {id !== undefined ? "Editar Produto" : ""}
      </h1>

      <form className="flex flex-col gap-4 w-full" onSubmit={gerarNovaProduct}>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={product.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            placeholder="Preço"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={product.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="imagem">Imagem</label>
          <input
            type="text"
            placeholder="Imagem URL"
            name="imagem"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={product.imagem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={product.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Qual a categoria do produto?</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) =>
              setCategoria(
                categorias.find(
                  (cat) => cat.id === parseInt(e.currentTarget.value),
                ) || { id: 0, nome: "" },
              )
            }
          >
            <option value="" disabled selected>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-custom-green
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoCategoria}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormProduct;
