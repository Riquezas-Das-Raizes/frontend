import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { AuthContext } from "../../../contexts/AuthContext";
import CardCart from "../cardcart/CardCart";
import { hotAlerta } from "../../../util/hotAlerta";
import ModalLogin from "../../modal/modallogin/ModalLogin";
import ModalRegister from "../../modal/modalregister/ModalRegister";

function Cart() {
  const { items, finalizarCompra } = useContext(CartContext);
  const { usuario } = useContext(AuthContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const subtotal = items.reduce((total, item) => {
    const preco = Number(item.preco) || 0;
    return total + preco;
  }, 0);

  const handleFinalizarCompra = () => {
    if (!usuario || !usuario.id) {
      hotAlerta("Você precisa estar logado para finalizar a compra.", 'erro');
      setIsLoginModalOpen(true);
      return;
    }

    if (items.length === 0) {
      hotAlerta("Carrinho está vazio.", 'erro');
      return;
    }

    finalizarCompra();
    hotAlerta("Compra finalizada com sucesso!", 'sucesso');
  };

  return (
    <div className="flex flex-col justify-center mx-8 my-8">
      <h1 className="text-4xl text-center my-4">Carrinho de Compras</h1>
      <div className="text-center my-2">
        {items.length === 0 ? <span className="text-2xl">O Carrinho está vazio!</span> : (
          <div className="py-1">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-3/4">
                  <div className="bg-white rounded-lg shadow-md p-4 mx-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr>
                          <th className="text-left text-lg font-semibold">Produto</th>
                          <th className="text-left text-lg font-semibold"></th>
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
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">R$ {subtotal.toFixed(2)}</span>
                    </div>
    
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                      type="button"
                      disabled={items.length === 0}
                      onClick={handleFinalizarCompra}
                    >
                      Finalizar compra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ModalLogin
        triggerElement={<></>}
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onRegisterClick={() => {
          setIsLoginModalOpen(false);
          setIsRegisterModalOpen(true);
        }}
      />

      <ModalRegister
        triggerElement={<></>}
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onLoginClick={() => {
          setIsRegisterModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </div>
  );
}

export default Cart;
