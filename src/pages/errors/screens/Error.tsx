import { Outlet } from "react-router-dom";
import { PageLayout } from "../../../_shared/layouts/PageLayout";
import { Center } from "../../../_shared/UI";

const Error = () => {
  return (
    <PageLayout>
      <Center>
        <Outlet />
      </Center>
    </PageLayout>
  );
};

export default Error;
