import React, { useState } from "react"
import Creatable, { useCreatable } from "react-select/creatable"
import { components } from "react-select"
import CreatableSelect from "react-select/creatable"
import {
  Button,
  Flex,
  Typography,
  Input,
  customStyle
} from "../../../_shared/UI"
import VerticalScrollContainer from "../../../_shared/UI/VerticalScrollContainer"
import { Box } from "./../../../_shared/UI/Box"
import { Controller, useFormContext } from "react-hook-form"
import { AiOutlineDelete } from "react-icons/ai"

interface Option {
  readonly label: string
  readonly value: string
}

export const skills = [
  "Algorithms",
  "Analytical Skills",
  "Big Data",
  "Calculating",
  "Compiling Statistics",
  "Data Analytics",
  "Data Mining",
  "Database Design",
  "Database Management",
  "Documentation",
  "Modeling",
  "Modification",
  "Needs Analysis",
  "Quantitative Research",
  "Quantitative Reports",
  "Statistical Analysis",
  "Applications",
  "Certifications",
  "Coding",
  "Computing",
  "Configuration",
  "Customer Support",
  "Debugging",
  "Design",
  "Development",
  "Hardware",
  "Implementation",
  "Information Technology",
  "Infrastructure",
  "Languages",
  "Maintenance",
  "Network Architecture",
  "Network Security",
  "Networking",
  "New Technologies",
  "Operating Systems",
  "Programming",
  "Restoration",
  "Security",
  "Servers",
  "Software",
  "Solution Delivery",
  "Storage",
  "Structures",
  "Systems Analysis",
  "Technical Support",
  "Technology",
  "Testing",
  "Tools",
  "Training",
  "Troubleshooting",
  "Usability",
  "Benchmarking",
  "Budget Planning",
  "Engineering",
  "Fabrication",
  "Following Specifications",
  "Operations",
  "Performance Review",
  "Project Planning",
  "Quality Assurance",
  "Quality Control",
  "Scheduling",
  "Task Delegation",
  "Task Management",
  "Blogging",
  "Digital Photography",
  "Digital Media",
  "Facebook",
  "Instagram",
  "Networking",
  "Pinterest",
  "SEO",
  "Social Media Platforms",
  "Twitter",
  "Web Analytics",
  "Client Relations",
  "Email",
  "Requirements Gathering",
  "Research",
  "Subject Matter Experts (SMEs)",
  "Technical Documentation"
]

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, "")
})

const defaultOptions = skills.map((skill: string) => createOption(skill))

const Skills = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const { control, watch, setValue } = useFormContext()

  const handleCreate = (inputValue: string) => {
    setIsLoading(true)
    setTimeout(() => {
      const newOption = createOption(inputValue)
      const selectedOption = watch("skills")
      setOptions((prev) => [...prev, newOption])
      setValue("skills", [...selectedOption, newOption])
      setIsLoading(false)
    }, 1000)
  }
  const Group = (props: any) => {
    return (
      <Button>
        <components.Group {...props} />
      </Button>
    )
  }

  return (
    <Flex fullSize style={{ gap: "30px 30px" }}>
      <Flex maxWidth={500} pl={4} pt={4}>
        <Typography variant={"title30"}>Enter your Skills</Typography>
        <Typography>
          Please provide all your skills , if some skills are not found , you
          can write it and press enter to create
        </Typography>
      </Flex>
      <VerticalScrollContainer height="100%" width="100%">
        <Flex style={{ gap: "20px" }} px={4}>
          <Flex
            flexDirection={"row"}
            style={{ gap: "10px" }}
            flexWrap={"wrap"}
            maxHeight={200}
            overflowY={"scroll"}
          >
            {watch("skills")?.map((skill: Option) => {
              return (
                <Box>
                  <Button
                    flexShrink={0}
                    iconPosition="right"
                    icon={<AiOutlineDelete />}
                    $size="default"
                    onClick={() =>
                      setValue(
                        "skills",
                        watch("skills")?.filter(
                          (option: Option) => option.label !== skill.label
                        )
                      )
                    }
                  >
                    {skill.label}
                  </Button>
                </Box>
              )
            })}
          </Flex>
          <Box maxWidth={"100%"}>
            <Controller
              name="skills"
              control={control}
              render={({ field: { ...rest } }) => (
                <CreatableSelect
                  controlShouldRenderValue={false}
                  styles={customStyle}
                  closeMenuOnSelect={false}
                  isClearable
                  // isDisabled={isLoading}
                  isLoading={isLoading}
                  onCreateOption={handleCreate}
                  options={options}
                  components={{ Group }}
                  isMulti
                  {...rest}
                />
              )}
            />
          </Box>
        </Flex>
      </VerticalScrollContainer>
    </Flex>
  )
}

export default Skills
