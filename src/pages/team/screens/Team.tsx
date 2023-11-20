import { Box, Button, Card, Flex, Typography } from "../../../_shared/UI";
import { PageLayout } from "../../../_shared/layouts/PageLayout";

const team = [
  {
    name: "Mahmoud Okily",
    role: "CEO",
    otherRoles: ["Senior Software Developer", "team leader"],
    image: require("../../../_shared/assets/mido.jpg"),
  },
  {
    name: "Mahmoud Okily",
    role: "CEO",
    otherRoles: ["Senior Software Developer", "team leader"],
    image: require("../../../_shared/assets/mido.jpg"),
  },
  {
    name: "Mahmoud Okily",
    role: "CEO",
    otherRoles: ["Senior Software Developer", "team leader"],
    image: require("../../../_shared/assets/mido.jpg"),
  },
  {
    name: "Mahmoud Okily",
    role: "CEO",
    otherRoles: ["Senior Software Developer", "team leader"],
    image: require("../../../_shared/assets/mido.jpg"),
  },
  {
    name: "Mahmoud Okily",
    role: "CEO",
    otherRoles: ["Senior Software Developer", "team leader"],
    image: require("../../../_shared/assets/mido.jpg"),
  },
  {
    name: "Mahmoud Okily",
    role: "CEO",
    otherRoles: ["Senior Software Developer", "team leader"],
    image: require("../../../_shared/assets/mido.jpg"),
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
              <Card overflow={"hidden"} width={300} minHeight={350}>
                <Flex>
                  <img alt="mahmoud okily" src={person.image} />
                </Flex>
                <Flex p={3} flexDirection={"column"} style={{ gap: "5px 5px" }}>
                  <Typography variant={"title30"}>{person.name}</Typography>
                  <Typography fontWeight={"bold"} variant={"title10"}>
                    {person.role}
                  </Typography>
                  {person.otherRoles.map((role) => {
                    return <Typography variant={"body10"}>{role}</Typography>;
                  })}
                </Flex>
              </Card>
            );
          })}
        </Flex>
        <Flex p={3}>
          <Button fontSize={"1.2rem"} width={300} height={50} $fill={false}>
            Work With Us
          </Button>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default Team;
