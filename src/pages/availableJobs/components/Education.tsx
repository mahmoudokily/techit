import { useAnimation } from "framer-motion"
import { useFieldArray, useFormContext } from "react-hook-form"
import { AiOutlineDelete } from "react-icons/ai"
import { GrAdd } from "react-icons/gr"
import { useInView } from "react-intersection-observer"
import { Accordion, Box, Button, Flex, Typography } from "../../../_shared/UI"
import VerticalScrollContainer from "../../../_shared/UI/VerticalScrollContainer"
import { Field, FieldProps } from "./Field"
import { FieldArray } from "./FieldArray"
import { useEffect } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
const educationField: FieldProps[] = [
  {
    label: "course",
    name: "course",
    required: true,
    placeholder: "course",
    type: "text"
  },
  {
    label: "institution",
    name: "institution",
    required: false,
    placeholder: "unimi di milano ",
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
    label: "start",
    name: "start",
    required: true,
    placeholder: "start",
    type: "date"
  },
  {
    label: "end",
    name: "end",
    required: true,
    placeholder: "end",
    type: "date"
  },
  {
    label: "location",
    name: "location",
    required: true,
    placeholder: "location",
    type: "text"
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
  const initial = { opacity: 0, y: 30 }
  const animation = useAnimation()

  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0
      })
    }
  }, [inView, animation])
  const { control, watch, setValue } = useFormContext()
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "educations"
  })
  const toggleAccordion = (name: string) => () => {
    const currentStatus = watch(name)
    setValue(name, !currentStatus)
  }
  return (
    <Flex fullSize style={{ gap: "30px 30px" }} ref={ref}>
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
          // flexDirection={"row"}
          style={{ gap: "20px 20px" }}
          p={3}
          justifyContent="flex-start"
        >
          <Flex flex={1} style={{ gap: "20px 20px" }}>
            {fields.map((field, index, fieldsArr) => (
              <Accordion
                toggle={toggleAccordion(`educations.${index}.isOpen`)}
                status={watch(`educations.${index}.isOpen`)}
                initialStatus={false}
                label={
                  <Flex
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    flex={1}
                  >
                    {watch(`educations.${index}`).course ? (
                      <Flex flexDirection={"column"}>
                        {" "}
                        <Typography variant={"title20"}>
                          {watch(`educations.${index}.course`)}
                        </Typography>
                        <Typography>
                          {watch(`educations.${index}.graduationDate`) &&
                            watch(`educations.${index}.graduationDate`)}
                        </Typography>
                      </Flex>
                    ) : (
                      `Education ` + Number(index + 1)
                    )}

                    <Flex
                      onClick={(e: any) => {
                        e.stopPropagation()
                      }}
                      flexDirection={"row"}
                      style={{ gap: "10px" }}
                    >
                      <Button
                        $fill={false}
                        withBorder={false}
                        variant="gray"
                        fixedSize
                        onClick={() => remove(index)}
                      >
                        <AiOutlineDelete fontSize={20} />
                      </Button>
                      <Button
                        $fill={false}
                        withBorder={false}
                        variant="gray"
                        onClick={(e) => move(index, Number(index - 1))}
                        disabled={index === 0}
                        fixedSize
                      >
                        <FaAngleUp fontSize={20} />
                      </Button>
                      <Button
                        $fill={false}
                        withBorder={false}
                        variant="gray"
                        onClick={(e: any) => move(index, Number(index + 1))}
                        disabled={index === fieldsArr.length - 1}
                        fixedSize
                      >
                        <FaAngleDown fontSize={20} />
                      </Button>
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
              onClick={() => append({ isOpen: true })}
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
              <Flex flexWrap={"wrap"} style={{ gap: "20px" }} flex={1}>
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
                        label: "Award",
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
