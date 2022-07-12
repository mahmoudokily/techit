import {
  Absolute,
  Box,
  Button,
  Flex,
  Typography,
} from "../../styledComponents";
import React, { forwardRef, useCallback } from "react";
import ReactDOM from "react-dom";

import { useOnClickOutside, useOnEscape } from "./hooks";
import styles from "./style";
import { DialogActionTypes, DialogProps } from "./types";
import { getFromLS } from "../../utils/func/storage";

const getRootPopup = () => {
  let PopupRoot = document.getElementById("popup-root");
  if (PopupRoot === null) {
    PopupRoot = document.createElement("div");
    PopupRoot.setAttribute("id", "popup-root");
    document.body.appendChild(PopupRoot);
  }

  return PopupRoot;
};

export const Dialog = forwardRef<DialogActionTypes, DialogProps>(
  (
    {
      label,
      disabled,
      handleSubmit,
      handleClose,
      children,
      defaultOpen = false,
      closeOnEscape = true,
      closeOnClickAway = true,
      submitLabel,
      closeLabel,
      onClose,
      noButton,
      onOpen,
      width,
      height,
      setIsOpen,
      isOpen = false,
      fullScreen = false,
      contentStyle,
      overlayStyle,
      titleStyle,
      ...props
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLElement>(null);
    // const { contentStyle, overlayStyle, titleStyle } = useDialogStyle(props);

    const closeHandlerFunc = useCallback(() => {
      handleClose?.();
      setIsOpen(false);
    }, [handleClose, setIsOpen]);

    const submitHandlerFunc = useCallback(() => {
      handleSubmit?.();
    }, [handleSubmit]);

    React.useImperativeHandle(ref, () => ({
      close: () => {
        setIsOpen(false);
      },
      open: () => {
        setIsOpen(true);
      },
      isOpen: isOpen,
      toggle: () => {
        setIsOpen((prevIsOpen: boolean) => !prevIsOpen);
      },
      handleClose: closeHandlerFunc,
      handleSubmit: submitHandlerFunc,
    }));

    const closePopup = (
      event?: React.SyntheticEvent | KeyboardEvent | TouchEvent | MouseEvent
    ) => {
      if (!isOpen) return;
      setIsOpen(false);
    };

    useOnEscape(closePopup, closeOnEscape);

    useOnClickOutside(contentRef, closePopup, closeOnClickAway);

    const content = useCallback(
      () => (
        <Box
          style={{ ...styles.overlay }}
          {...(overlayStyle as React.ComponentProps<typeof Box>)}
        >
          <Box
            borderRadius={4}
            ref={contentRef as any}
            style={{
              position: "relative",
              maxWidth: "1200px",
              width: fullScreen ? "100%" : width,
              height: fullScreen ? "100%" : height,
              ...styles.content,
            }}
            {...(contentStyle as React.ComponentProps<typeof Box>)}
          >
            <Flex height="100%" width="100%" flexDirection="column">
              <Flex flexDirection="column">
                {label && (
                  <Typography
                    textAlign="center"
                    mb="m"
                    capitalizeFirstLetter
                    {...(titleStyle as React.ComponentProps<typeof Typography>)}
                  >
                    {label}
                  </Typography>
                )}
                <Absolute
                  flex={1}
                  height={"100%"}
                  flexShrink={0}
                  background="#fff"
                  width="100%"
                  display="flex"
                >
                  <Flex>{children}</Flex>
                </Absolute>
              </Flex>
              {!noButton && (
                <Flex justifyContent="flex-end" mt="m">
                  {handleSubmit && (
                    <Button
                      onClick={submitHandlerFunc}
                      variant="primary"
                      mr="s"
                      disabled={disabled}
                    >
                      {submitLabel}
                    </Button>
                  )}
                  {handleClose && (
                    <Button onClick={closeHandlerFunc}>{closeLabel}</Button>
                  )}
                </Flex>
              )}
            </Flex>
          </Box>
        </Box>
      ),
      [
        children,
        label,
        submitHandlerFunc,
        closeHandlerFunc,
        closeLabel,
        contentStyle,
        handleClose,
        fullScreen,
        disabled,
        handleSubmit,
        height,
        overlayStyle,
        titleStyle,
        submitLabel,
        width,
        noButton,
      ]
    );

    return isOpen ? ReactDOM.createPortal(content(), getRootPopup()) : null;
  }
);

Dialog.displayName = "Dialog";

Dialog.defaultProps = {
  componentName: "Dialog",
  "data-testid": "Dialog",
  width: "80%",
  height: "80%",
  submitLabel: "submit",
  closeLabel: "close",
};
