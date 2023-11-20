import { Outlet } from "react-router-dom";
import { Flex } from "../../../_shared/styledComponents";

const Error = () => {
  return (
    <Flex height={"100%"} width={"100%"}>
      <Outlet />
    </Flex>
  );
};

export default Error;
