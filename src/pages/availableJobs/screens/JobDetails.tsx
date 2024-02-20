import { useNavigate, useParams } from "react-router-dom";
import { PageLayout } from "../../../_shared/layouts/PageLayout";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Crumb,
  Flex,
  StyledLink,
  Typography
} from "../../../_shared/UI";
import { jobs } from "./WorkWithUs";
import { format } from "date-fns";

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentJob = jobs.find((job: any) => job.id === id);

  return (
    <Flex fullSize p={2}>
      <Breadcrumbs size="default">
        <Crumb>
          <StyledLink to="/work-with-us">Work With Us</StyledLink>
        </Crumb>
        <Crumb>
          <StyledLink to={`/${id}`}>{currentJob?.role}</StyledLink>
        </Crumb>
      </Breadcrumbs>
      <Flex fullSize justifyContent={"center"} alignItems={"center"} p={3}>
        <Typography variant="title40">{currentJob?.role}</Typography>
        <Card mt={2} p={3} height={"100%"} maxWidth={"600px"}>
          <Flex
            maxWidth={800}
            justifyContent={"space-between"}
            flexDirection={"row"}
            pb={3}
          >
            <Box>
              <Typography>
                Date :{" "}
                {currentJob?.date && format(currentJob.date, "dd/mm/yyyy")}
              </Typography>
            </Box>
            <Box>
              <Typography>Type : {currentJob?.type}</Typography>
            </Box>
            <Box>
              <Typography>place : {currentJob?.place}</Typography>
            </Box>
            <Box>
              <Typography>Status : {currentJob?.status}</Typography>
            </Box>
          </Flex>
          <Flex>
            <Typography variant={"title20"} pb={2}>
              Summary:
            </Typography>
            <Typography maxWidth={700}>{currentJob?.summary}</Typography>
          </Flex>
          <Flex py={3}>
            <Typography variant={"title20"} pb={2}>
              Requirements:
            </Typography>
            {currentJob?.requirements.map((requirement) => {
              return (
                <li>
                  <Typography>{requirement}</Typography>
                </li>
              );
            })}
          </Flex>

          <Flex p={3}>
            <Button
              variant="primary"
              fontSize={"1.2rem"}
              width={300}
              height={50}
              $fill={false}
              withBorder
              onClick={() => navigate(`/work-with-us/${id}/apply`)}
            >
              Apply Now
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};
export default JobDetails;
