import { PDFDownloadLink } from "@react-pdf/renderer"
import { useFormContext } from "react-hook-form"
import { Button, Center, Flex, Typography } from "../../../_shared/UI"
import { PDF } from "./Pdf"
import PreviewCv from "./PreviewCv"
import { useEffect, useState } from "react"
import Loader from "../../../_shared/assets/svg/Loader"
import { Absolute } from "../../../_shared/styledComponents"
const SaveCV = () => {
  const { watch } = useFormContext()
  const file = watch("image")
  const [isLoading, setIsLoading] = useState<boolean>(true)

  let imgSrc: string = ""
  if (file && file[0]) {
    imgSrc = URL.createObjectURL(file[0])
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  return (
    <Flex fullSize position={"relative"}>
      {isLoading ? (
        <Absolute
          top={0}
          bottom={0}
          left={0}
          right={0}
          height={"100%"}
          width={"100%"}
          zIndex={5000}
        >
          <Center
            style={{ flexDirection: "column", backgroundColor: "#dbe4f3" }}
          >
            <Loader width="150px" />
            <Typography>We Create Your CV Now</Typography>
          </Center>
        </Absolute>
      ) : (
        false
      )}
      <Flex maxWidth={500}>
        <Typography variant={"title30"}> Good Work !</Typography>
        <Typography>You Can Now Download Your Beautiful CV</Typography>
      </Flex>
      <Flex fullSize flexDirection={"row"}>
        <Flex height={"auto"} flex={1} bg={"red"}>
          <PreviewCv />
        </Flex>
        <Flex
          fullSize
          flex={1}
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
    </Flex>
  )
}

export default SaveCV
