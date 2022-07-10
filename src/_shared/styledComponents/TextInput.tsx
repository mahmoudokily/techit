import React from "react";
import styled, { css } from "styled-components";
import { variant, compose, space, layout, typography } from "styled-system";
import { Flex, Label } from "./BaseUi";
import Svg from "./Svg";
import { InputContainerProps } from "./types";

export const Input = styled.input`
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
  padding: 0;
  margin: 0;
  padding-left: 15px;
  transition: all 0.2s ease;
  background: transparent;
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

export const InputContainer = styled.div<InputContainerProps>`
  ${variant({
    prop: "borderRadius",
    variants: {
      round: {
        borderRadius: "30px",
      },
      none: {
        borderRadius: "0%",
      },
      default: {
        borderRadius: "5px",
      },
    },
  })};

  border: 1px solid ${(props) => props.theme.colors.primary.main};
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  height: 40px;
  flex: 1;
  width: 100%;
  max-width: 100%;
  align-items: center;
  position: relative;
  justify-content: space-between;

  &::-moz-focus-inner {
    border: 0;
  }
  & > * {
    transition: transform 0.2s ease;
  }

  &:focus-within {
    ${({ withShadow, theme }) => css`
      border: 1px solid ${(props) => props.theme.colors?.primary};
    `}
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
  ${compose(space, layout, typography)}
`;
export const TextInput = React.forwardRef<any, InputContainerProps>(
  (
    {
      description,
      error,
      id,
      prefix,
      suffix,
      onPrefixClick,
      onSuffixClick,
      labelColor,
      iconColor,
      label,
      type,
      background,
      ...props
    },
    ref
  ) => {
    return (
      <Flex style={{ flex: 1, flexDirection: "column", width: "100%" }}>
        {label && (
          <Label color={labelColor} htmlFor={id}>
            {label}
          </Label>
        )}
        <InputContainer {...props} background={background}>
          {prefix && (
            <Svg
              color={iconColor}
              ml={3}
              name={prefix}
              onClick={onPrefixClick}
            />
          )}
          <Input
            ref={ref}
            {...props}
            placeholder={props.placeholder || "first name"}
            id={id}
            type={type}
          />
          {suffix && (
            <Svg
              color={iconColor}
              mr={3}
              name={suffix}
              onClick={onSuffixClick}
            />
          )}
        </InputContainer>
        {description && (
          <span
            style={{
              color: "#737373",
              fontSize: 12,
              flexWrap: "wrap",
              maxWidth: props.width || 200,
              display: "flex",
              marginTop: 5,
            }}
          >
            {description}
          </span>
        )}
        {error && (
          <span
            style={{
              color: "red",
              fontSize: 12,
              flexWrap: "wrap",
              maxWidth: props.width || 200,
              display: "flex",
              marginTop: 5,
            }}
          >
            {error}
          </span>
        )}
      </Flex>
    );
  }
);

TextInput.defaultProps = {
  borderRadius: "default",
  withShadow: false,
};
export default TextInput;
