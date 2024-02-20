import { Outlet, useNavigate } from "react-router-dom"
import { Card, CardWrapper, Container, Flex, Page } from "../../../_shared/UI"
import Sidebar from "../../../_shared/UI/sidebar/Sidebar"
import { FormProvider } from "../components/FormProvider"
import { useEffect, useState } from "react"
import { createCvSteps } from "../../../_shared/utils/data/createCvSteps"
import NavigationButtons from "../components/NavigationButtons"
import StepsProgressBar from "../components/ProgressBar"

const Apply = () => {
  return (
    <Flex fullSize flexDirection={"row"} style={{ gap: "20px 20px" }}>
      <Sidebar items={createCvSteps}>
        <Page>
          <FormProvider>
            <Flex fullSize>
              <StepsProgressBar />
              <Outlet />
              <NavigationButtons />
            </Flex>
          </FormProvider>
        </Page>
      </Sidebar>
    </Flex>
  )
}
export default Apply
