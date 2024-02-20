import { useFieldArray, useFormContext } from "react-hook-form"
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai"
import { GrAdd } from "react-icons/gr"
import {
  Accordion,
  Box,
  Button,
  Card,
  Flex,
  Typography
} from "../../../_shared/UI"
import { Absolute } from "../../../_shared/UI/Absolute"
import VerticalScrollContainer from "../../../_shared/UI/VerticalScrollContainer"
import { Field, FieldProps } from "./Field"
import { FieldArray } from "./FieldArray"
const educationField: FieldProps[] = [
  {
    label: "name of institution",
    name: "nameOfInstitution",
    required: false,
    placeholder: "mario rosso",
    type: "text"
  },
  {
    label: "location",
    name: "location",
    required: true,
    placeholder: "location",
    type: "text"
  },
  {
    label: "degree or title",
    name: "degree",
    required: true,
    placeholder: "degree or title",
    type: "text"
  },
  {
    label: "course",
    name: "course",
    required: true,
    placeholder: "course",
    type: "text"
  },
  {
    label: "graduation date",
    name: "graduationDate",
    required: true,
    placeholder: "graduation date",
    type: "date"
  },

  {
    label: "description",
    name: "description",
    required: false,
    placeholder: "description",
    type: "textarea"
  }
]

const levelOptions = ["Basic", "Intermediate", "Advanced", "Fluent"]

export const languagesOptions = [
  "English",
  "Arabic",
  "Italian",
  "Spanish",
  "French",
  "German",
  "Cinese"
]
const Education = () => {
  const { control, register, watch, handleSubmit } = useFormContext()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "educations"
    }
  )
  return (
    <Flex fullSize style={{ gap: "30px 30px" }}>
      <Flex maxWidth={500} pl={4} pt={4}>
        <Typography variant={"title30"}>Enter your education</Typography>
        <Typography>
          Please provide information on universities, colleges, vocational
          programmes and training courses, even if you didn't complete them
        </Typography>
      </Flex>
      <VerticalScrollContainer height="100%" width="100%">
        <Flex
          flexWrap={"wrap"}
          flexDirection={"row"}
          style={{ gap: "20px 20px" }}
          p={3}
          justifyContent="flex-start"
        >
          <Flex flex={1} style={{ gap: "20px 20px" }}>
            {fields.map((field, index, fieldsArr) => (
              <Accordion
                initialStatus={index === fieldsArr.length - 1 ? true : false}
                label={
                  <Flex
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    flex={1}
                  >
                    <Typography variant={"title20"}>
                      {`Education` + Number(index + 1)}
                    </Typography>
                    <Flex
                      onClick={(e: any) => {
                        e.stopPropagation()
                        remove(index)
                      }}
                    >
                      <AiOutlineDelete fontSize={20} />
                    </Flex>
                  </Flex>
                }
                maxHeight={370}
                key={field.id}
              >
                <Flex
                  flexDirection={"row"}
                  flexWrap={"wrap"}
                  style={{ gap: "20px" }}
                >
                  {educationField.map(({ name, ...nestedField }) => (
                    <Field
                      key={`${name}-${field.id}-${index}`}
                      name={`educations.${index}.${name}`}
                      {...nestedField}
                    />
                  ))}
                </Flex>
              </Accordion>
            ))}
            <Button
              icon={<GrAdd />}
              height={60}
              fontSize="1em"
              block
              variant="gray"
              onClick={() => append({})}
            >
              Add An Other Education
            </Button>
          </Flex>

          <Box flex={1}>
            <Flex style={{ gap: "20px 20px" }}>
              <Flex flex={1}>
                <FieldArray
                  name="languages"
                  fieldsArr={[
                    {
                      name: "language",
                      type: "creatable",
                      options: languagesOptions,
                      label: "Language",
                      required: false
                    },
                    {
                      name: "level",
                      type: "creatable",
                      options: levelOptions,
                      label: "Level",
                      required: false
                    }
                  ]}
                  label="languages"
                  required={false}
                />
              </Flex>
              <Flex flex={1}>
                <FieldArray
                  name="publications"
                  label="publications"
                  required={false}
                  fieldsArr={[
                    {
                      name: "label",
                      type: "text",
                      label: "Label",
                      required: true
                    },
                    {
                      name: "desc",
                      type: "textarea",
                      label: "Description",
                      required: true
                    }
                  ]}
                />
              </Flex>
              <Flex
                flexDirection={"row"}
                flexWrap={"wrap"}
                style={{ gap: "20px" }}
                flex={1}
              >
                <Flex flex={1}>
                  <FieldArray
                    fieldsArr={[
                      {
                        name: "value",
                        type: "text",
                        label: "course",
                        required: false
                      }
                    ]}
                    name="courses"
                    label="course"
                    required={false}
                  />
                </Flex>

                <Flex flex={1}>
                  <FieldArray
                    fieldsArr={[
                      {
                        name: "value",
                        type: "text",
                        label: "course",
                        required: false
                      }
                    ]}
                    name="awards"
                    label="award"
                    required={false}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </VerticalScrollContainer>
    </Flex>
  )
}

export default Education
