/** @format */

import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Flex } from "./_shared/UI"
import { useAppDispatch } from "./_shared/redux/app/hooks"
import { FixedButton } from "./_shared/styledComponents"
import Svg from "./_shared/styledComponents/Svg"
import Header from "./header/screen/Header"
import { PageLayout } from "./_shared/layouts/PageLayout"

function App() {
  // const theme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch()

  const [showButton, setShowButton] = useState(false)
  // test
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      if (window.scrollY > 800) setShowButton(true)
      else setShowButton(false)
    })
    return () => {
      window.removeEventListener("scroll", () => console.log(window.scrollY))
    }
  }, [])

  const scrollTo = (id: string) => () => {
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <PageLayout>
      {showButton && (
        <FixedButton onClick={scrollTo("hero")}>
          <Svg name="ChevronUp" />
        </FixedButton>
      )}
      <Flex flex={1} minHeight="100vh">
        <Outlet />
      </Flex>
    </PageLayout>
  )
}

export default App
