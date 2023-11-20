import { useNavigate } from "react-router-dom";
import { Button, Card, Flex, Typography } from "../../../_shared/UI";
import { PageLayout } from "../../../_shared/layouts/PageLayout";
const clients = [
  {
    name: "Senso",
    website: "https://www.senso.it",
    image: require("../../../_shared/assets/senso.png"),
  },
  {
    name: "Reasoned Art",
    website: "https://www.reasonedart.com",
    image: require("../../../_shared/assets/reasonedArt.png"),
  },
  {
    name: "Be Charge",
    website: "https://www.bec.energy/",
    image: require("../../../_shared/assets/becharge.png"),
  },
];
const Clients = () => {
  return (
    <PageLayout autoHideHeader={false}>
      <Flex p={3} fullSize justifyContent={"center"} alignItems={"center"}>
        <Typography variant="title40">Some Of Our Clients</Typography>
      </Flex>
      <Flex
        p={3}
        flexDirection={"row"}
        style={{ gap: "20px 20px ", flexWrap: "wrap" }}
        maxWidth={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {clients.map((client) => {
          return (
            <Card overflow={"hidden"} width={300} minHeight={350}>
              <Flex height={300}>
                <img alt="mahmoud okily" src={client.image} />
              </Flex>
              <Flex
                justifyContent={"flex-start"}
                p={3}
                flexDirection={"column"}
                style={{ gap: "5px 5px" }}
              >
                <Typography variant={"title30"}>{client.name}</Typography>
                <Button
                  link
                  onClick={() =>
                    window.open(client.website, "_blank", "noopener,noreferrer")
                  }
                >
                  visit website
                </Button>
              </Flex>
            </Card>
          );
        })}
      </Flex>
      <Flex p={3} justifyContent={"center"} alignItems={"center"}>
        <Button fontSize={"1.2rem"} width={400} height={50} $fill={false}>
          Be one of our customers
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default Clients;
