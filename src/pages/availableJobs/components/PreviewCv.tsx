import React from "react"
import { Flex } from "../../../_shared/UI"
import { PDFViewer } from "@react-pdf/renderer"
import { PDF } from "./Pdf"
import { useFormContext } from "react-hook-form"
import { calculateAge } from "../../../_shared/utils/func/age"

const PreviewCv = () => {
  const { watch } = useFormContext()
  const file = watch("image")

  let imgSrc: string = ""
  if (file && file[0]) {
    imgSrc = URL.createObjectURL(file[0])
  }
  return (
    <Flex fullSize justifyContent={"center"} alignItems={"center"}>
      <PDFViewer style={{ height: "100%", width: "100%" }} showToolbar={true}>
        <PDF
          about={watch("about")}
          firstName={watch("firstName")}
          lastName={watch("lastName")}
          languages={watch("languages")}
          imgSrc={imgSrc}
          position={watch("position")}
          email={watch("email")}
          mobile={watch("mobile")}
          website={watch("website")}
          address={watch("address")}
          country={watch("country")?.label}
          jobs={watch("jobs")}
          skills={watch("skills")}
          gender={watch("gender")}
          licenseDrive={watch("licenseDrive")}
          birthday={watch("birthday")}
          age={calculateAge(watch("birthday"))}
          preferences={watch("preferences")}
          publications={watch("publications")}
          educations={watch("educations")}
        />
      </PDFViewer>
    </Flex>
  )
}

export default PreviewCv
