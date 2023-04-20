import * as S from './style';
import { useEffect } from "react";

const Modal = ({ children, onClose, width }) => {
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
    <S.ModalOverlay style={{ width }} onClick={handleOverlayClick}>
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;