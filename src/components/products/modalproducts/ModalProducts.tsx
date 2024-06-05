import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import "./ModalProducts.css";
import FormProduct from "../formproducts/FormProducts";

function ModalProduct() {
  return (
    <>
      <Popup
        trigger={
          <button
            className=" rounded
                        font-bold
                        text-yellow-900 
                        border-yellow-900
                        hover:bg-yellow-900
                        hover:text-white
                        border-solid 
                        border-2
                        py-2 
                        px-4"
          >
            Cadastrar Novo Produto
          </button>
        }
        modal
      >
        <FormProduct />
      </Popup>
    </>
  );
}

export default ModalProduct;
