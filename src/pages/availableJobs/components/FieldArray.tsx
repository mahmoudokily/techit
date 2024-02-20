import React, { useState } from "react"
import {
  Accordion,
  Box,
  Button,
  DateInput,
  Flex,
  Input,
  InputLabel,
  Select
} from "../../../_shared/UI"
import { Controller, useFieldArray, useFormContext } from "react-hook-form"
import { AiFillDelete } from "react-icons/ai"
import CreatableSelect, { useCreatable } from "react-select/creatable"
import { Textarea } from "../../../_shared/styledComponents"
import { Field } from "./Field"

export interface FieldArrayProps {
  label: string
  name: string
  required: boolean
  fieldsArr: {
    name: string
    type: "text" | "textarea" | "select" | "creatable"
    options?: string[]
    label: string
    required: boolean
  }[]
}
export const FieldArray: React.FC<FieldArrayProps> = ({
  label,
  required,
  name,
  fieldsArr
}) => {
  const { control, register, watch, setValue } = useFormContext()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name
    }
  )
  const [isLoading, setIsLoading] = useState(false)
  // const [options, setOptions] = useState(defaultOptions)
  // const [levels, setLevels] = useState(
  //   levels.map((level: string) => createOption(level))
  // )

  return (
    <Accordion
      label={`${label} (optional)`}
      initialStatus={watch(name)?.length > 0 ? true : false}
    >
      <Flex pr={3} pt={3} style={{ gap: "20px 20px" }}>
        {fields.map((field, index) => (
          <Flex
            fullSize
            alignItems={"center"}
            justifyContent={"center"}
            style={{ gap: "10px" }}
            key={field.id}
            flexWrap={"wrap"}
            flexDirection={"row"}
            p={2}
          >
            {fieldsArr?.map((nestedField) => {
              return (
                <Field
                  {...nestedField}
                  name={`${name}.${index}.${nestedField.name}`}
                  placeholder={nestedField.label}
                />
              )
            })}
          </Flex>
        ))}
        <Flex flexShrink={0}>
          <Button
            $size="default"
            variant="secondary"
            $fill={false}
            onClick={() => append("")}
          >
            Add A relevant {label}
          </Button>
        </Flex>
      </Flex>
    </Accordion>
  )
}
