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
        <button className=" font-bold text-white bg-custom-red rounded-3xl py-2 px-4 z-10">
          Eu Quero
        </button>
      }
      modal
    >
      <div className="flex p-4 bg-custom-beige rounded-2xl">
        <div className="flex flex-col p-5">
          <h1 className="text-xl text-white font-bold text-center mb-5 bg-custom-green rounded-xl">{product.nome}</h1>

          <img
            src={product.imagem}
            alt={product.nome}
            className="w-full object-cover rounded-xl shadow-2xl shadow-slate-500"
          />
        </div>
        <div className=" flex flex-col justify-center align-center w-full">
          <p className="text-black text-xl text-center ">{product.descricao}</p>
          <div className="border border-gray-300 mt-5"></div>
          <div className="flex justify-center gap-x-11 mt-10 mb-5">
            <p className="text-gray-900 font-bold text-2xl ">
              R$ {product.preco}
            </p>
            <button className="bg-custom-green hover:bg-custom-emerald text-white font-bold py-2 px-4 rounded-xl">
              Comprar
            </button>
          </div>
          <div className="border border-gray-300"></div>
          <div className="flex flex-col mt-5">
            <div className="flex justify-center gap-x-5">
            <a href="" target="_blank" className="transform transition-transform duration-300 hover:scale-110 hover:text-custom-red">
              <InstagramLogo size={36} />
            </a>
            <a href="" target="_blank" className="transform transition-transform duration-300 hover:scale-110 hover:text-custom-green">
              <WhatsappLogo size={36} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}

export default CardProductModal;
