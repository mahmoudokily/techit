import React from "react"
import { Absolute } from "./Absolute"
import { Flex } from "./Flex"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import styled from "styled-components"

type VerticalScrollContainerProps = React.ComponentPropsWithRef<typeof Flex>

const VerticalScrollContainer: React.FC<VerticalScrollContainerProps> = ({
  children,
  ...rest
}) => {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const initial = { opacity: 0, y: 30 }
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0
      })
    }
  }, [inView, animation])

  return (
    <MotionFlex
      initial={initial}
      transition={{ delay: 0.1, duration: 0.6 }}
      animate={animation}
      ref={ref}
    >
      <Absolute
        flex={1}
        height="100%"
        display="flex"
        flexDirection="column"
        top="0"
        right="0"
        left="0"
        bottom="0"
        overflow="auto"
        {...rest}
      >
        {children}
      </Absolute>
    </MotionFlex>
  )
}
export default VerticalScrollContainer

const MotionFlex = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  position: relative;
`
