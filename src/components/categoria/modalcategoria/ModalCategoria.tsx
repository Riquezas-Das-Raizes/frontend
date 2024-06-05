import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './ModalCategoria.css' 
import FormCategoria from "../formcategoria/FormCategoria";


function ModalCategoria() {
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
                        Cadastrar Categoria
                    </button>
                }
                modal
            >
            <FormCategoria />
            </Popup>
        </>
    );
}

export default ModalCategoria;