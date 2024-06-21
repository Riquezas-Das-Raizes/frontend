import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Product from "../../../models/Produto";
import { InstagramLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";

interface CardProductProps {
  product: Product;
}

function CardProductModal({ product }: CardProductProps) {

  const { adicionarProduto } = useContext(CartContext)
  
  return (
    <Popup
      trigger={
        <button className="font-bold text-white bg-custom-red rounded-3xl py-2 px-4 z-10">
          Eu Quero
        </button>
      }
      modal
      contentStyle={{ width: '90%', maxWidth: '800px', borderRadius: '20px', padding: '0' }}
    >
      <div className="flex flex-col md:flex-row p-4 bg-custom-beige rounded-2xl w-full">
        <div className="w-full md:w-1/2 p-5 flex flex-col items-center justify-center">
          <h1 className="text-2xl text-black font-bold mb-5 p-2 text-center underline">
            {product.nome}
          </h1>
          <img
            src={product.imagem}
            alt={product.nome}
            className="w-full h-72 object-cover rounded-xl mb-4 shadow-2xl shadow-slate-500"
          />
        </div>

        <div className="md:w-1/2 p-5 flex flex-col justify-center">
          <p className="text-black text-xl text-center mb-4 mt-4">{product.descricao}</p>
          <div className="border border-gray-800 my-4"></div>
          <div className="flex justify-center items-center gap-x-5 mb-5">
            <p className="text-gray-900 font-bold text-2xl">
              R$ {product.preco}
            </p>
            <button className="bg-custom-green hover:bg-custom-emerald text-white font-bold py-2 px-4 rounded-xl"
            onClick={() => adicionarProduto(product)}>
            Comprar
            </button>
          </div>
          
          <div className="border border-gray-300 my-4"></div>
          <div className="flex justify-center gap-x-5 mt-5">
            <button className="transform transition-transform duration-300 hover:scale-110 hover:text-custom-red">
              <Link to="/artesaos">
                <InstagramLogo size={36} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Popup>
  );
}

export default CardProductModal;
