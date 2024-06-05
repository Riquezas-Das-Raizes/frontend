import Popup from "reactjs-popup";


import 'reactjs-popup/dist/index.css';
import './ModalProducts.css' 
import FormProduct from "../formproducts/FormProducts";


function ModalProduct() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className=' rounded
                        font-bold
                        text-custom-emerald 
                        border-custom-green
                        hover:bg-custom-emerald
                        hover:text-white
                        border-solid 
                        border-2
                        py-2 
                        px-4'>
                        Cadastrar Produto
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