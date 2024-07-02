import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Produto from "../../../models/Produto";
import { Trash } from "@phosphor-icons/react";

interface CardProdutosProps {
  item: Produto;
}

function CardCart({ item }: CardProdutosProps) {
  const { removerProduto } = useContext(CartContext);

  return (
    <tr className="border-t border-gray-300">
      <td className="py-1 w-20 ">
        <img
          src={item.imagem}
          className="mt-1 h-20 w-20 max-w-75 mx-auto"
          alt={item.nome}
        />
      </td>
      <td className="py-1">
        <p className="text-sm text-center uppercase font-semibold">
          {item.nome}
        </p>
      </td>
      <td className="py-1">
        <p className="text-l text-left w-full font-bold uppercase">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.preco)}
        </p>
      </td>
      <td className="py-1">
        <button
          className="w-58 text-red-500 hover:bg-red-800 flex items-left justify-center py-2"
          onClick={() => removerProduto(item.id)}
        >
          <Trash size={32} />
        </button>
      </td>
    </tr>
  );
}

export default CardCart;
