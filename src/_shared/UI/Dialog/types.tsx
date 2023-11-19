import React, { HTMLAttributes } from "react";

export type DialogProps = {
  isOpen: boolean;
  children?: React.ReactNode[] | React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit?: () => void;
  handleClose?: () => void;
  closeOnPressEscape?: boolean;
  closeOnClickAway?: boolean;
  width?: string;
  height?: string;
  label?: string;
  withCloseButton?: boolean;
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}
export type ButtonProps = {
  primary?: boolean;
  padding?: string;
  margin?: string;
};
