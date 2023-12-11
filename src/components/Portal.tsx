import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  selecter?: string;
}

const Portal = ({ children, selecter }: PortalProps) => {
  const rootElement = selecter && document.querySelector(selecter);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
