import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { createCvSteps } from "../../../_shared/utils/data/createCvSteps"
import { Box, Flex, Input, Typography } from "../../../_shared/UI"
import { useSteps } from "../../../_shared/hooks/assets/useSteps"
import { useLocation } from "react-router-dom"
import { Absolute } from "../../../_shared/UI/Absolute"

const StepsProgressBar = () => {
  const location = useLocation()
  const pathnames = location.pathname.split("/")
  const pathname = pathnames[pathnames.length - 1]
  const [stepPercentage, setStepPercentage] = useState<number>(0)
  const { next, previous, nextPath, prevPath, currentStep } = useSteps(
    createCvSteps,
    pathname
  )
  useEffect(() => {
    if (currentStep) {
      setStepPercentage(
        (100 / (createCvSteps.length + 1)) * (currentStep?.id - 1)
      )
    }
  }, [currentStep, currentStep?.id])
  return (
    <Container>
      {/* <ProgressBarContainer>
        {createCvSteps.map((step, index) => {
          return (
            <IndexedStep className={step === currentStep ? "accomplished" : ""}>
              {index + 1}
            </IndexedStep>
          )
        })}
      </ProgressBarContainer> */}
      <Flex flexDirection={"row"} alignItems={"center"}>
        <ProgressBarWrapper>
          <ProgressBar width={`${stepPercentage}%`} />
        </ProgressBarWrapper>
        <Typography>{Math.round(stepPercentage)}%</Typography>
      </Flex>
    </Container>
  )
}

export default StepsProgressBar
const Container = styled(Flex)`
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`

const IndexedStep = styled.div`
  color: rgb(190, 190, 190);
  width: 30px;
  height: 30px;
  font-size: 12px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(206, 206, 206);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.accomplished {
    background-color: #664de5;
    color: white;
    border-style: none;
  }
`
const ProgressBarContainer = styled(Flex)`
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`

const ProgressBarWrapper = styled.div`
  border: 2px solid #cf4f83;
  height: 40px;
  width: 20vw;
  border-radius: 5px;
  display: flex;
  position: relative;
  margin-right: 5px;
`
// const fill = keyframes`
//   0% {width: 0%}
//   100% {width: 100%}
// `

const ProgressBar = styled(Box)`
  background: #cf4f83;
  height: 100%;
  animation: ${({ width }) =>
      keyframes`
   0% {width: 0%}  
   100% {width: ${width}%}
`}
    300ms linear 1;
`
