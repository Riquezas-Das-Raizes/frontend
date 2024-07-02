import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import Produto from "../models/Produto";
import { hotAlerta } from "../util/hotAlerta";
import { AuthContext } from "./AuthContext";

interface CartContextProps {
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (produtoId: number) => void;
  limparCart: () => void;
  items: Produto[];
  quantidadeItems: number;
  finalizarCompra: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<Produto[]>(() => {
    const savedItems = localStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const { compras, setCompras } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const quantidadeItems = items.length;

  function adicionarProduto(produto: Produto) {
    const indice = items.find(item => item.id === produto.id);
    if (indice) {
      hotAlerta('Este Produto já foi Adicionado!', 'info');
    } else {
      setItems(state => [...state, produto]);
      hotAlerta('Produto Adicionado!', 'sucesso');
    }
  }

  function removerProduto(produtoId: number) {
    const indice = items.findIndex(item => item.id === produtoId);
    if (indice >= 0) {
      const novoCart = [...items];
      novoCart.splice(indice, 1);
      setItems(novoCart);
    }
  }

  function limparCart() {
    setItems([]);
  }

  function finalizarCompra() {
    const novaCompra = {
      id: compras.length + 1,
      itens: items,
      data: new Date().toLocaleString(),
    };
    setCompras([...compras, novaCompra]);
    limparCart();
  }

  return (
    <CartContext.Provider
      value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems, finalizarCompra }}
    >
      {children}
    </CartContext.Provider>
  );
}
