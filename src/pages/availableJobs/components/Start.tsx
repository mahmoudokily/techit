import { Flex, Typography } from "../../../_shared/UI"
import VerticalScrollContainer from "../../../_shared/UI/VerticalScrollContainer"
import { Template1 } from "./templates/template1/Template1"
import Template2 from "./templates/template2/Template2"

const Start = () => {
  return (
    <Flex fullSize>
      <Flex pr={3} style={{ gap: "5px 5px" }}>
        <Typography variant={"title30"}>L'ts Start </Typography>
        <Typography> Select Your favorite model</Typography>
      </Flex>
      <VerticalScrollContainer>
        <Flex
          flexDirection={"row"}
          style={{ gap: "20px" }}
          justifyContent={"center"}
          mt={3}
          fullSize
        >
          <Flex borderRadius={5} clickable flex={1} width={300} height={600}>
            <Template1 />
          </Flex>
          <Flex borderRadius={5} clickable flex={1} width={300} height={600}>
            <Template2 />
          </Flex>
        </Flex>
      </VerticalScrollContainer>
    </Flex>
  )
}

export default Start
