import React from "react";
import styled from "@emotion/styled";
import Portal from "./Portal";
import { CSSTransition } from "react-transition-group";
import "./modal.css";

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 465px;
  position: relative;
  width: 100%;
`;

interface Props {
  children: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
  selecter?: string;
}

export default function Modal({
  children,
  isOpen,
  onClose,
  selecter = "#modal-root",
}: Props) {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <Portal selecter={selecter}>
        <Overlay>
          <Dim onClick={onClose} />
          <Container>{children}</Container>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
}
