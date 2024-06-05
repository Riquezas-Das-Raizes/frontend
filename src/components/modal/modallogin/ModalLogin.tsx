import Popup from "reactjs-popup";


import 'reactjs-popup/dist/index.css';
import './ModalLogin.css' 

import Login from "../../../pages/login/Login";
import { SignIn } from "@phosphor-icons/react";


function ModalLogin() {
    return (
        <>
            <Popup
                trigger={
                    <button >
                        <SignIn size={25} />
                    </button>
                }
                modal
            >
                <div>Login</div>
                {/* <Login /> */}
            </Popup>
        </>
    );
}

export default ModalLogin;