import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 50%;
  transform: translate(50%);
  width: 100vw;
  height: 100vh;
  z-index: 11;
`;