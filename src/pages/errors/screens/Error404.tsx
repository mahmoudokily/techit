import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { Button, Flex, Typography } from "../../../_shared/UI";
const Error404 = () => {
  const navigate = useNavigate();
  return (
    <Flex fullSize>
      <Typography textAlign="center" fontSize={56} fontWeight="bold">
        404
      </Typography>
      <Typography textAlign="center">
        Oops! {t("The page you requested wasn't found")}
      </Typography>
      <Button
        onClick={() => navigate("/")}
        maxWidth={400}
        margin="10px auto"
        height="50"
      >
        {t("go to home page")}
      </Button>
    </Flex>
  );
};

export default Error404;
