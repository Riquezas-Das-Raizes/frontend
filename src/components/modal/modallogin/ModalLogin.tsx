import React, { useEffect, useRef } from 'react';
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
      <Login onClose={close} onRegisterClick={onRegisterClick} />
    </div>
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
