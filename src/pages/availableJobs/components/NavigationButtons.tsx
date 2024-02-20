import React, { useState } from "react"
import { Dialog, Button, Flex, DialogBody } from "../../../_shared/UI"
import { useSteps } from "../../../_shared/hooks/assets/useSteps"
import { createCvSteps } from "../../../_shared/utils/data/createCvSteps"
import { useLocation } from "react-router-dom"
import { BsEye } from "react-icons/bs"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import PreviewCv from "./PreviewCv"
import { Absolute } from "../../../_shared/styledComponents"

const NavigationButtons = () => {
  const location = useLocation()
  const [status, setStatus] = useState<boolean>(false)

  const pathnames = location.pathname.split("/")
  const pathname = pathnames[pathnames.length - 1]
  const { next, previous, nextPath, prevPath, currentStep } = useSteps(
    createCvSteps,
    pathname
  )

  return (
    <Flex
      flexDirection={"row"}
      style={{ gap: "10px" }}
      justifyContent={"center"}
      py={3}
      flexWrap={"wrap"}
    >
      <Button
        variant="secondary"
        onClick={previous}
        disabled={!prevPath}
        icon={<FaAngleLeft />}
      >
        previous
      </Button>

      {currentStep?.name !== "save" && (
        <>
          <Button
            variant="secondary"
            icon={<BsEye />}
            onClick={() => setStatus(true)}
          >
            Preview
          </Button>
          <Button
            variant="secondary"
            onClick={next}
            disabled={!nextPath}
            icon={<FaAngleRight />}
            iconPosition="right"
          >
            Next
          </Button>
        </>
      )}

      {status && (
        <Dialog
          width="695px"
          height="80%"
          setIsOpen={setStatus}
          isOpen={status}
        >
          <DialogBody>
            {/* <Absolute height={40} top={0} left={0} right={0} width={"100%"}>
              <Flex bg="white" fullSize></Flex>
            </Absolute> */}
            <PreviewCv />
          </DialogBody>
        </Dialog>
      )}
    </Flex>
  )
}

export default NavigationButtons
