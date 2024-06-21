import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './ModalRegister.css';
import Cadastro from "../../../pages/cadastro/Cadastro";

interface ModalRegisterProps {
  triggerElement: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

function ModalRegister({ triggerElement, isOpen, onClose, onLoginClick }: ModalRegisterProps) {
  const content = (close: any) => (
    <Cadastro onClose={close} onLoginClick={onLoginClick} />
  );

  return (
    <Popup
      trigger={triggerElement}
      modal
      open={isOpen}
      onClose={onClose}
      contentStyle={{
        width: '90%',
        maxWidth: '800px',
        maxHeight: '100vh', // Altura máxima definida
        padding: '20px',
        borderRadius: '10px',
        overflow: 'hidden' // Esconder overflow
      }}
    >
      {content(onClose)}
    </Popup>
  );
}

export default ModalRegister;
