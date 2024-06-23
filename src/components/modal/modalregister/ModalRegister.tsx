import React, { useEffect, useRef } from 'react';
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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const content = (close: () => void) => (
    <div ref={contentRef}>
      <Cadastro onClose={close} onLoginClick={onLoginClick} />
    </div>
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
        maxHeight: '100vh',
        padding: '20px',
        borderRadius: '10px',
        overflow: 'hidden'
      }}
    >
      {content(onClose)}
    </Popup>
  );
}

export default ModalRegister;
