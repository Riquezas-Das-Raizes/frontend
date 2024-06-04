import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Product {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  categoria?: Categoria | null,
  usuario?: Usuario | null
}