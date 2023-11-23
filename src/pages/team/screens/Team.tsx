import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Box, Button, Card, Flex, Typography } from "../../../_shared/UI";
import { PageLayout } from "../../../_shared/layouts/PageLayout";
import { FooterSocialIcon, Row } from "../../../_shared/styledComponents";
import { footerSocialData } from "../../../_shared/utils/data/footer";
import { ReactNode } from "react";

const team = [
  {
    name: "Mahmoud Okily",
    role: "Partner",
    otherRoles: ["Senior Software Developer", "Team leader"],
    image: require("../../../_shared/assets/mido2.png"),
    social: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mahmoudokily/",
        icon: <FaLinkedin color="white" />,
      },
      {
        name: "github",
        link: "https://github.com/mahmoudokily",
        icon: <FaGithub color="white" />,
      },
    ],
  },
  {
    name: "Boclair Temgoua",
    role: "Partner",
    otherRoles: ["Senior Software Developer", "Team leader"],
    image: require("../../../_shared/assets/bop.jpg"),
    social: [
      {
        link: "https://www.linkedin.com/in/boclair-temgoua-688b42b8/",
        name: "linkedin",
        icon: <FaLinkedin color="white" />,
      },
      {
        link: "https://github.com/boclair-temgoua",
        name: "github",
        icon: <FaGithub color="white" />,
      },
    ],
  },
];
const Team = () => {
  return (
    <PageLayout autoHideHeader={false}>
      <Flex fullSize justifyContent={"center"} alignItems={"center"} p={3}>
        <Typography variant="title40">Our Team</Typography>

        <Flex
          p={3}
          flexDirection={"row"}
          style={{ gap: "20px 20px ", flexWrap: "wrap" }}
          maxWidth={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {team.map((person) => {
            return (
              <Card overflow={"hidden"} width={300} minHeight={300}>
                <Flex justifyContent={"center"} alignItems={"center"} p={3}>
                  <img
                    alt="mahmoud okily"
                    src={person.image}
                    width={200}
                    height={200}
                    style={{ borderRadius: "50%", border: "1px solid #003eaa" }}
                  />
                </Flex>
                <Flex
                  p={3}
                  flexDirection={"column"}
                  style={{ gap: "5px 5px" }}
                  flexShrink={0}
                  height={200}
                  borderTop={"1px solid #003eaa"}
                  bg="primary"
                >
                  <Typography color="white" variant={"title30"}>
                    {person.name}
                  </Typography>
                  <Typography
                    color="white"
                    fontWeight={"bold"}
                    variant={"title10"}
                  >
                    {person.role}
                  </Typography>
                  {person.otherRoles.map((role) => {
                    return (
                      <Typography color="white" variant={"body10"}>
                        {role}
                      </Typography>
                    );
                  })}
                  <Box mt={2}>
                    <Button disabled $size="default" block variant="light">
                      Download Cv
                    </Button>
                  </Box>
                  <Row alignItems="center" margin="10px  0 0 0" gridGap="1rem">
                    {person.social.map((social: any, index: number) => (
                      <FooterSocialIcon
                        key={index}
                        href={social.link}
                        target="_blank"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </FooterSocialIcon>
                    ))}
                  </Row>
                </Flex>
              </Card>
            );
          })}
        </Flex>
        <Flex p={3}>
          <Button
            disabled
            fontSize={"1.2rem"}
            width={300}
            height={50}
            $fill={false}
          >
            Work With Us
          </Button>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default Team;
