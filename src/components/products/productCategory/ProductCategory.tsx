import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscar } from "../../../services/Service";
import Product from "../../../models/Produto";
import CardProducts from "../cardproducts/CardProducts";
import { DNA } from "react-loader-spinner";

function ProductCategory() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [produtos, setProdutos] = useState<Product[]>([]);
  async function buscarProdutos() {
    try {
      await buscar(`/categorias/${id}/produto`, setProdutos, {});
    } catch (err) {
      console.log("erro: ", err);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [id]); // Remova [produtos.length] para evitar loop infinito

  console.log(produtos);
  return (
    <>
      {produtos.length == 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
          {produtos.map((produto) => (
            <CardProducts key={produto.id} product={produto} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductCategory;
