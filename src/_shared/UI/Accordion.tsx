import { ReactNode, useEffect } from "react"
import { Box } from "./Box"
import { Flex } from "./Flex"
import { useState } from "react"
import { Typography } from "./Typography"
// import { AngleDown, AngleTop } from '../assets/svg';
import VerticalScrollContainer from "./VerticalScrollContainer"
import { Card } from "./Card"
import { Button } from "./Button"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { useTheme } from "styled-components"

interface Props extends React.ComponentPropsWithRef<typeof Flex> {
  label: string | ReactNode
  children: ReactNode | ReactNode[] | string
  maxHeight?: number | string
  initialStatus: boolean
}

export const Accordion: React.FC<Props> = ({
  label,
  children,
  maxHeight = "200px",
  initialStatus,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialStatus)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Card {...rest} borderRadius={5}>
      <Flex
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        onClick={handleToggle}
        style={{ cursor: "pointer", gap: "10px" }}
        p={3}
        borderRadius={5}
        borderBottom={"1px solid #eee"}
      >
        {typeof label === "string" ? (
          <Typography capitalizeFirstLetter variant="title20">
            {label}
          </Typography>
        ) : (
          label
        )}

        <Box onClick={handleToggle}>
          {isOpen ? <FaAngleUp size="25" /> : <FaAngleDown size="25" />}
        </Box>
      </Flex>
      {isOpen ? (
        <Box flexShrink={0} height={maxHeight} position="relative" p={3}>
          <VerticalScrollContainer height="100%">
            {children}
          </VerticalScrollContainer>
        </Box>
      ) : null}
    </Card>
  )
}
