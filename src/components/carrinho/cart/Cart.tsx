import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "../cardcart/CardCart";
import Produto from "../../../models/Produto";

interface CardProdutosProps {
  item: Produto;
}

function Cart() {
  const navigate = useNavigate();
  const { items, limparCart } = useContext(CartContext);

  const subtotal = items.reduce((total, item) => {
    const preco = Number(item.preco) || 0;
    return total + preco;
  }, 0);

  console.log(`Subtotal: ${subtotal}, Type: ${typeof subtotal}`);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl text-center my-4">Carrinho de Compras</h1>
      <h2 className="text-2xl text-center my-2">
        {items.length === 0 ? "O Carrinho está vazio!" : ""}
      </h2>
      <div className="py-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-4 mx-auto  ">
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="text-left text-lg font-semibold">
                        Produto
                      </th>
                      <th className="text-left text-lg font-semibold "></th>
                      <th className="text-left text-lg font-semibold">Preço</th>
                      <th className="text-left text-lg font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((produto) => (
                      <CardCart key={produto.id} item={produto} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Resumo da Compra</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{`R$ ${subtotal.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{`R$ ${subtotal.toFixed(
                    2
                  )}`}</span>
                </div>

                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                  type="submit"
                  disabled={items.length === 0}
                  onClick={limparCart}
                >
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
