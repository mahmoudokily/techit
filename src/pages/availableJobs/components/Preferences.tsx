import React, { useState } from "react"
import Creatable, { useCreatable } from "react-select/creatable"
import CreatableSelect from "react-select/creatable"
import { Card, Flex, InputLabel, Typography } from "../../../_shared/UI"
import VerticalScrollContainer from "../../../_shared/UI/VerticalScrollContainer"
import { Box } from "./../../../_shared/UI/Box"
import { Controller, useFormContext } from "react-hook-form"
import { FieldArray } from "./FieldArray"
import { Accordion } from "./../../../_shared/UI/Accordion"
import { Field } from "./Field"

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

const Preferences = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState(defaultOptions)
  const { control, watch, setValue } = useFormContext()

  const handleCreate = (inputValue: string) => {
    setIsLoading(true)
    setTimeout(() => {
      const newOption = createOption(inputValue)
      const selectedOption = watch("preferences")
      setOptions((prev) => [...prev, newOption])
      setValue("preferences", [...selectedOption, newOption])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Flex fullSize style={{ gap: "30px 30px" }}>
      <Flex maxWidth={500} pl={4} pt={4}>
        <Typography variant={"title30"}>Preferences & Interests</Typography>
        <Typography>
          Please provide all your Preferences , if some Preferences are not
          found , you can write it and press enter to create
        </Typography>
      </Flex>
      <VerticalScrollContainer height="100%" width="100%">
        <Flex px={4} flexWrap={"wrap"} style={{ gap: "10px 10px" }} py={2}>
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
              name="interests"
              label="interest"
              required={false}
            />
          </Flex>
          <Flex flex={1}>
            <Accordion
              maxHeight={300}
              label="preferences"
              initialStatus={false}
            >
              <Field
                type="creatable"
                name="preferences"
                required={true}
                placeholder=""
                label="preferences"
                options={skills}
                isMulti
                selectedOption={watch("preferences")}
              />
            </Accordion>
          </Flex>
        </Flex>
      </VerticalScrollContainer>
    </Flex>
  )
}

export default Preferences
