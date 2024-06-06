import { Link } from "react-router-dom";
import Product from "../../../models/Produto";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardProductModal from "../cardProductModal/CardproductModal";

interface CardProductProps {
  product: Product;
}

function CardProducts({ product }: CardProductProps) {
  const [mostrar, setMostrar] = useState(false);

  const { usuario } = useContext(AuthContext);

  return (
    <div
      className="max-w-sm w-full overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 relative rounded-lg m-4"
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}
    >
      <div className="relative p-4">
        <img
          className="w-full h-auto rounded-sm mb-4"
          src={product.imagem}
          alt={product.nome}
        />
        <div className="font-bold text-xl text-center mb-2">
          {product.nome}
        </div>
        <div className="text-center text-gray-700 text-base mb-2">
          R$ {product.preco}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100 text-center">
        <CardProductModal product={product} />
      </div>

      {usuario.admin && (
        <div
          className={`transition-opacity duration-300 ${
            mostrar ? "opacity-100" : "opacity-0"
          } absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10`}
        >
          <Link to={`/editarProduto/${product.id}`}>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
              Editar
            </button>
          </Link>

          <Link to={`/deletarProduto/${product.id}`}>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Apagar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CardProducts;
