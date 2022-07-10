import React from "react";
import styled from "styled-components";
import { Flex, Label } from "./BaseUi";
import { TextareaContainerProps } from "./types";

const StyledTextArea = styled.textarea`
  -webkit-appearance: none;
  user-select: none;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  max-width: 100%;
  height: 40px;
  font-size: 18px;
  flex-shrink: 3;
  padding: 10px;
  margin: 0;
  padding-left: 15px;
  border-radius: 5px;
  transition: all 0.2s ease;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 18px;
  }
  :-ms-input-placeholder {
    font-size: 18px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Textarea = React.forwardRef<any, TextareaContainerProps>(
  (
    { description, error, id, labelColor, label, background, ...props },
    ref
  ) => {
    return (
      <Flex
        style={{
          flex: 1,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Label color={labelColor}>{label}</Label>
        <StyledTextArea {...props} />
      </Flex>
    );
  }
);
