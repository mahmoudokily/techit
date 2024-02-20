/** @format */

import React from "react"
import styled from "styled-components"
import { InputLabel, Typography } from "../UI"
import { Flex } from "./BaseUi"
import { TextareaContainerProps } from "./types"

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
`

export const Textarea = React.forwardRef<any, TextareaContainerProps>(
  (
    {
      description,
      error,
      id,
      labelColor,
      label,
      errorProps,
      background,
      ...props
    },
    ref
  ) => {
    return (
      <Flex
        style={{
          flex: 1,
          flexDirection: "column",
          width: "100%"
        }}
      >
        {label && (
          <InputLabel color={labelColor} required={props.required}>
            {label}
          </InputLabel>
        )}

        <StyledTextArea {...props} ref={ref} />
        {error && (
          <Typography
            maxWidth="100%"
            display="flex"
            width="auto"
            flexWrap="wrap"
            capitalizeFirstLetter
            variant="caption10"
            color="red"
            py={1}
            textAlign="left"
            alignItems="center"
            {...errorProps}
          >
            {error}
          </Typography>
        )}
      </Flex>
    )
  }
)
