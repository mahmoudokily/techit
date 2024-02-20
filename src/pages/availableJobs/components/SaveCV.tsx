import { PDFDownloadLink } from "@react-pdf/renderer"
import { useFormContext } from "react-hook-form"
import { Button, Flex, Typography } from "../../../_shared/UI"
import { PDF } from "./Pdf"
const SaveCV = () => {
  const { watch } = useFormContext()
  const file = watch("image")

  let imgSrc: string = ""
  if (file && file[0]) {
    imgSrc = URL.createObjectURL(file[0])
  }
  return (
    <Flex fullSize>
      <Flex maxWidth={500}>
        <Typography variant={"title30"}> Good Work !</Typography>
        <Typography>You Can Now Download Your Beautiful CV</Typography>
      </Flex>
      <Flex
        fullSize
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        style={{ gap: "20px" }}
      >
        <Button block maxWidth={350} height={40}>
          <PDFDownloadLink
            style={{
              padding: "10px",
              textDecoration: "none",
              fontSize: "20px",
              color: "white"
            }}
            document={
              <PDF
                about={watch("about")}
                firstName={watch("firstName")}
                lastName={watch("lastName")}
                languages={watch("languages")}
                imgSrc={imgSrc}
                position={watch("currentPosition")}
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
                preferences={watch("preferences")}
                publications={watch("publications")}
              />
            }
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading CV ..." : "Download PDF now !"
            }
          </PDFDownloadLink>
        </Button>
        <Button block maxWidth={350} height={40}>
          Copy Link
        </Button>
      </Flex>
    </Flex>
  )
}

export default SaveCV
