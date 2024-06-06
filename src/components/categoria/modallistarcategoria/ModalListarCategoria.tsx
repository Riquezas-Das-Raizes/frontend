import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './ModalListarCategoria.css' 
import ListaCategoria from "../listacategoria/ListaCategoria";


function ModalListarCategoria() {
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
                        px-4'
                        >
                        Listar Categorias
                    </button>
                }
                modal
            >
            <ListaCategoria />
            </Popup>
        </>
    );
}

export default ModalListarCategoria;