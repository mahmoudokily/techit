import React from "react";

export type DialogActionTypes = {
  open: () => void;
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
  handleSubmit: () => void;
  handleClose: () => void;
};

export type DialogProps = {
  componentName?: string;
  "data-testid"?: string;
  children?: any;
  disabled?: boolean;
  handleSubmit?: () => void;
  handleClose?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
  submitLabel?: string;
  closeLabel?: string;
  defaultOpen?: boolean;
  label?: string;
  contentStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  title?: string;

  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeOnClickAway?: boolean;
  closeOnEscape?: boolean;
  width?: string;
  height?: string;
  fullScreen?: boolean;
  noButton?: boolean;
};
