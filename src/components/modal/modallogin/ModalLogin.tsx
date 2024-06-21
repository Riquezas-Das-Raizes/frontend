import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './ModalLogin.css';
import Login from "../../../pages/login/Login";

interface ModalLoginProps {
  triggerElement: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

function ModalLogin({ triggerElement, isOpen, onClose, onRegisterClick }: ModalLoginProps) {
  const content = (close: () => void) => (
    <Login onClose={close} onRegisterClick={onRegisterClick} />
  );

  return (
    <Popup
      trigger={triggerElement}
      modal
      open={isOpen}
      onClose={onClose}
      contentStyle={{ width: '90%', maxWidth: '600px', padding: '20px', borderRadius: '10px' }}
    >
      {content(onClose)}
    </Popup>
  );
}

export default ModalLogin;
