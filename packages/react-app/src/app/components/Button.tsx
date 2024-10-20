"use client";

import React, { HTMLAttributes, useEffect, useRef } from "react";
import { Button as PureButton } from "../../../../ui-components/src";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button = ({ children, onClick }: ButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttonElement = PureButton({
      label: children,
      onClick,
    });
    if (buttonRef.current) {
      buttonRef.current.innerHTML = "";
      buttonRef.current.appendChild(buttonElement);
    }
  }, [children, onClick]);

  return <div ref={buttonRef} />;
};

export default Button;
