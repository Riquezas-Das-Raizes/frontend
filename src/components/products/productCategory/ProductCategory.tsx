import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscar } from "../../../services/Service";
import Product from "../../../models/Produto";
import CardProducts from "../cardproducts/CardProducts";
import { DNA } from "react-loader-spinner";

function ProductCategory() {
  const { id } = useParams<{ id: string }>();
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [categoria, setCategoria] = useState<{ nome: string } | null>(null);

  async function buscarProdutos() {
    try {
      await buscar(`/categorias/${id}/produto`, setProdutos, {});
    } catch (err) {
      console.log("erro: ", err);
    }
  }

  async function buscarCategoria() {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {});
    } catch (err) {
      console.log("erro: ", err);
    }
  }

  useEffect(() => {
    buscarProdutos();
    buscarCategoria();
  }, [id]);

  return (
    <>
      {categoria && (
        <div className="text-center text-2xl font-bold pt-10">
          {categoria.nome}
        </div>
      )}
      {produtos.length === 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 px-20">
          {produtos.map((produto) => (
            <CardProducts key={produto.id} product={produto} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductCategory;
