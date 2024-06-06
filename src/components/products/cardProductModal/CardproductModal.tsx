import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Product from "../../../models/Produto";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

interface CardProductProps {
  product: Product;
}

function CardProductModal({ product }: CardProductProps) {
  return (
    <Popup
      trigger={
        <button className="rounded font-bold text-white bg-custom-red rounded-3xl py-2 px-4 z-10">
          Eu Quero
        </button>
      }
      modal
    >
      <div className="flex p-4">
        <div className="flex flex-col p-5">
          <h1 className="text-xl font-bold text-center mb-5">{product.nome}</h1>

          <img
            src={product.imagem}
            alt={product.nome}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center align-center w-full">
          <p className="text-gray-700 text-base">{product.descricao}</p>
          <div className="flex justify-center gap-x-11 mt-10 mb-5">
            <p className="text-gray-700 font-medium text-2xl">
              R$ {product.preco}
            </p>
            <button className="bg-custom-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Comprar
            </button>
          </div>
          <div className="border border-gray-300"></div>
          <div className="flex flex-col mt-5">
            <div className="flex justify-center gap-x-5">
            <InstagramLogo size={36} />
            <WhatsappLogo size={36} />
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}

export default CardProductModal;
