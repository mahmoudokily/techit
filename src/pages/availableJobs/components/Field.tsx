// Forms/Field.js

import React, { useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { AiFillDelete, AiOutlineDelete, AiOutlineUser } from "react-icons/ai"
import CreatableSelect from "react-select/creatable"
import styled from "styled-components"
import {
  Box,
  Button,
  Flex,
  Input,
  InputLabel,
  Select,
  Typography
} from "../../../_shared/UI"
import { Textarea } from "../../../_shared/styledComponents"

export interface FieldProps {
  label: string
  name: string
  required: boolean
  placeholder: string
  isMulti?: boolean
  selectedOption?: Option[]
  type:
    | "text"
    | "file"
    | "select"
    | "date"
    | "image"
    | "textarea"
    | "creatable"
    | "month"
  options?: string[]
}
interface Option {
  readonly label: string
  readonly value: string
}

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, "")
})
export const Field: React.FC<FieldProps> = ({
  label,
  required,
  placeholder,
  options,
  isMulti,
  type,
  selectedOption = [],
  name
}) => {
  const handleCreate = (name: string) => (inputValue: string) => {
    setIsLoading(true)
    setTimeout(() => {
      const newOption = createOption(inputValue)
      if (isMulti) {
        setValue(name, [...selectedOption, newOption])
      } else {
        setValue(name, newOption)
      }

      setIsLoading(false)
    }, 1000)
  }
  const [isLoading, setIsLoading] = useState(false)
  const { register, watch, setValue, control } = useFormContext()
  switch (type) {
    case "creatable":
      return (
        <Flex style={{ gap: "20px" }} px={4} flex={1}>
          {selectedOption && isMulti && (
            <Flex
              flexDirection={"row"}
              style={{ gap: "10px" }}
              flexWrap={"wrap"}
              maxHeight={200}
              overflowY={"scroll"}
              height={200}
              justifyContent={"flex-start"}
            >
              {selectedOption?.map((op: Option) => {
                return (
                  <Box>
                    <Button
                      flexShrink={0}
                      iconPosition="right"
                      icon={<AiOutlineDelete />}
                      $size="default"
                      onClick={() =>
                        setValue(
                          name,
                          watch(name)?.filter(
                            (option: Option) => option.label !== op.label
                          )
                        )
                      }
                    >
                      {op.label}
                    </Button>
                  </Box>
                )
              })}
            </Flex>
          )}

          <Controller
            name={name}
            control={control}
            render={({ field: { ...rest } }) => (
              <CreatableSelect
                isClearable
                // isDisabled={isLoading}
                controlShouldRenderValue={isMulti}
                openMenuOnFocus
                closeMenuOnSelect={isMulti}
                placeholder={placeholder}
                menuPosition="fixed"
                isLoading={isLoading}
                onCreateOption={handleCreate(name)}
                options={
                  options?.map((level: string) => createOption(level)) || []
                }
                isMulti={isMulti}
                {...rest}
              />
            )}
          />
        </Flex>
      )
    case "select":
      return (
        <Box flex={1} minWidth={200}>
          <InputLabel required={required} children={label} />
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Select
                openMenuOnFocus
                placeholder={placeholder}
                options={
                  options?.map((option) => ({
                    label: option,
                    value: option
                  })) || []
                }
                {...field}
              />
            )}
          />
        </Box>
      )
    case "textarea":
      return (
        <Flex width="100%">
          <Box flex={1}>
            <Textarea
              style={{ border: "1px solid #737373" }}
              placeholder={placeholder}
              label={label}
              {...register(name)}
              required={required}
            />
          </Box>
        </Flex>
      )
    case "image":
      const file = watch("image")
      let imgSrc
      if (file && file[0]) {
        imgSrc = URL.createObjectURL(file[0])
      }
      return (
        <Flex
          width={"100%"}
          flexDirection={"row"}
          style={{ gap: "20px" }}
          flexWrap={"wrap"}
        >
          <ImageViewWrapper>
            {!!imgSrc ? (
              <img src={imgSrc} alt="cv" />
            ) : (
              <AiOutlineUser size={25} />
            )}
          </ImageViewWrapper>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            style={{ gap: "10px" }}
          >
            <Typography capitalizeFirstLetter>{placeholder}</Typography>
            <Flex
              flexDirection={"row"}
              style={{ gap: "10px" }}
              alignItems={"center"}
            >
              <ImageLabel>
                {!!imgSrc ? "change" : "add"} Photo
                <input
                  style={{ display: "none" }}
                  {...register(type)}
                  type="file"
                  multiple={false}
                />
              </ImageLabel>
              {!!imgSrc && (
                <Button
                  $size="default"
                  fixedSize
                  $fill={false}
                  variant="secondary"
                  onClick={() => setValue("image", null)}
                >
                  <AiFillDelete size={20} />
                </Button>
              )}
            </Flex>
          </Flex>
        </Flex>
      )
    default:
      return (
        <Box minWidth={200} flex={1}>
          <InputLabel required={required} children={label} />
          <Input
            placeholder={placeholder}
            {...register(name)}
            type={type}
            variant="primary"
            $fill={false}
            inputElement
          />
        </Box>
      )
  }
}
export const ImageViewWrapper = styled(Flex)`
  border: 1px dashed #eee;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  img {
    border-radius: 50%;
    max-width: 100px;
    max-height: 100px;
  }
`

const ImageLabel = styled.label`
  padding: 10px 20px;
  border-radius: 3px;
  border: 1px solid #737373;
  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`
