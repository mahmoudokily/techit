import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  height: 42px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;
const SwitchElement = styled.div`
  position: relative;
  width: 60px;
  height: 25px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;

    background: white;
    transform: translate(0, -50%);
  }
`;
const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchElement} {
    background: ${({ theme }) => theme.colors.primary};
    &:before {
      transform: translate(25px, -50%);
    }
  }
`;

export const Switch = React.forwardRef<any, any>(({ ...props }, ref) => (
  <CheckboxContainer disabled={props.disabled}>
    <Input type="checkbox" ref={ref} {...props} />
    <SwitchElement />
  </CheckboxContainer>
));
