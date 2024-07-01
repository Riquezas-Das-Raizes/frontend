import React, { useEffect, useRef } from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import FormEdicaoCategoria from '../../categoria/formcategoria/FormEdicaoCategoria';

interface ModalEditCategoryProps {
  triggerElement: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  categoriaId: string;
  onUpdateSuccess: () => void;
}

function ModalEditCategory({ triggerElement, isOpen, onClose, categoriaId, onUpdateSuccess }: ModalEditCategoryProps) {
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
      <FormEdicaoCategoria categoriaId={categoriaId} onClose={close} onUpdateSuccess={onUpdateSuccess} />
    </div>
  );

  return (
    <Popup
      trigger={triggerElement}
      modal
      open={isOpen}
      onClose={onClose}
      contentStyle={{ width: '30%', maxWidth: '30%', padding: '20px', borderRadius: '10px', backgroundColor: '#F0EAD2'}}
    >
      {content(onClose)}
    </Popup>
  );
}

export default ModalEditCategory;
