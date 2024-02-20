import styled from "styled-components"

import Footer from "./PDFFooter"
import PageCounter from "./PageCounter"
import { Button, Card, Flex } from ".."
import React, { PropsWithChildren, useState } from "react"

const Container = styled.div`
  flex-wrap: wrap;
  border: 1px solid #737373;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`

const PDFViewer: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Container>
      {/* <PageCounter /> */}
      {isOpen ? (
        <Flex flex={1}>
          <Button onClick={(e) => setIsOpen((prev) => !prev)}>hide</Button>
          {children}
        </Flex>
      ) : (
        <Flex width={100}>
          <Button onClick={(e) => setIsOpen((prev) => !prev)}>preview</Button>
        </Flex>
      )}
      {/* <Footer /> */}
    </Container>
  )
}
export default PDFViewer
