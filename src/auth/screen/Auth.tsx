import { Box, Button, Center, Flex, Input, InputLabel } from "../../_shared/UI";

const Auth = () => {
  return (
    <Flex bg="black" style={{ placeItems: "center" }} fullSize>
      <form>
        <Flex style={{ gap: "15px 15px " }} p={3} width={500}>
          <Box>
            <InputLabel required>Email</InputLabel>
            <Input variant="gray" placeholder="insert an email" />
          </Box>
          <Box>
            <InputLabel required>Password</InputLabel>
            <Input variant="gray" placeholder="Password" />
          </Box>
          <Box>
            <Button $size="default">Log in</Button>
          </Box>
        </Flex>
      </form>
    </Flex>
  );
};
export default Auth;
