import React, { forwardRef, RefObject, useCallback } from "react";
import ReactDOM from "react-dom";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { useCloseOnClickAway, useCloseOnPressEscape } from "./hooks";
import { Card, Overlay } from "./StyledElements";
import { DialogProps } from "./types";

const getRootPopup = () => {
  //check if some popup exists
  let PopupRoot = document.getElementById("popup-root");
  //if not create one and append it to the body
  if (PopupRoot === null) {
    PopupRoot = document.createElement("div");
    PopupRoot.setAttribute("id", "popup-root");
    document.body.appendChild(PopupRoot);
  }
  //if exist return it, this func will help us to close all others pupop before open a new one
  return PopupRoot;
};

export const Dialog = forwardRef<any, DialogProps>(
  (
    {
      isOpen,
      setIsOpen,
      handleSubmit,
      handleClose,
      closeOnPressEscape,
      closeOnClickAway,
      children,
      label,
      withCloseButton,
      ...props
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null);
    const onClickClose = useCallback(() => {
      handleClose?.();
      setIsOpen(false);
    }, [setIsOpen, handleClose]);

    const onClickSubmit = useCallback(() => {
      handleSubmit?.();
    }, [handleSubmit]);

    useCloseOnPressEscape(onClickClose, closeOnPressEscape);
    useCloseOnClickAway(contentRef, onClickClose, closeOnClickAway);

    const DialogContent = useCallback(
      () => (
        <Overlay ref={ref}>
          <Card
            width={props["width"]}
            height={props["height"]}
            ref={contentRef as RefObject<HTMLDivElement>}
          >
            {withCloseButton ? (
              <Button
                shape="default"
                $fill={false}
                withBorder={false}
                fixedSize
                onClick={onClickClose}
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  margin: 10,
                  cursor: "pointer",
                  zIndex: 5000,
                }}
              >
                X
              </Button>
            ) : null}
            <Flex fullSize>{children}</Flex>
          </Card>
        </Overlay>
      ),
      [children, onClickClose, props, withCloseButton]
    );

    return isOpen
      ? ReactDOM.createPortal(DialogContent(), getRootPopup())
      : null;
  }
);

Dialog.defaultProps = {
  closeOnClickAway: true,
  closeOnPressEscape: true,
  withCloseButton: true,
  width: "50%",
  height: "50%",
};
