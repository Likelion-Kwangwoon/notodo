import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ModalContent = styled.div`
  z-index: 1;
  width: 100%;
`;