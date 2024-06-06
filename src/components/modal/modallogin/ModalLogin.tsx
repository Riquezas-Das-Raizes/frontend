import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './ModalLogin.css';
import Login from "../../../pages/login/Login";

function ModalLogin({ triggerElement }) {
  return (
    <>
      <Popup trigger={triggerElement} modal>
        <Login />
      </Popup>
    </>
  );
}

export default ModalLogin;
