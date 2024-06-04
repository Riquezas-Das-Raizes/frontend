import Produto from "./Produto";

export default interface Categoria {
  id: number;
  name: string;
  product?: Produto | null;
}
