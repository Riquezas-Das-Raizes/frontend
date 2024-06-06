import Popup from "reactjs-popup";


import 'reactjs-popup/dist/index.css';
import './ModalLogin.css' 

import Login from "../../../pages/login/Login";

function ModalLogin({triggerElement, titleElement}) {
    return (
        <>
            <Popup 
                trigger={triggerElement, titleElement}
               modal
            >
                <Login />
            </Popup>
        </>
    );
}

export default ModalLogin;