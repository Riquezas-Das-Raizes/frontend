import Popup from "reactjs-popup";


import 'reactjs-popup/dist/index.css';
import './ModalRegister.css' 

import Cadastro from "../../../pages/cadastro/Cadastro";

function ModalRegister({triggerElement}) {
    return (
        <>
            <Popup 
                trigger={triggerElement} 
               modal
            >
                <Cadastro />
            </Popup>
        </>
    );
}

export default ModalRegister;