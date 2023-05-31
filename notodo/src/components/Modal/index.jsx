import * as S from './style';
import { useEffect } from "react";

const Modal = ({ children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.getElementById('root').style.overflow = "hidden";
    return () => {
      document.getElementById('root').style.overflow = "unset";
    };
  }, []);

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      {children}
    </S.ModalOverlay>
  );
};

export default Modal;