import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TextInput, Section, Textarea } from "../../_shared/styledComponents";
import { Button, Container } from "../../_shared/styledComponents/BaseUi";
import {
  FooterColumn,
  FooterGrid,
  Heading,
  Subtitle,
  TopLine,
} from "../../_shared/styledComponents/ProjectUi";

const CallUs = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
  return (
    <Section ref={ref}>
      <Container>
        <FooterGrid>
          <FooterColumn alignItems="start">
            <TopLine>Contact us</TopLine>
            <Heading>Let's be in touch</Heading>
            <Subtitle>
              Write your message and we will reply to you as soon as possible
            </Subtitle>
          </FooterColumn>
          <FooterColumn>
            <form style={{ width: "100%" }}>
              <TextInput
                labelColor="#fff"
                label="Email"
                variant="default"
                type="text"
                placeholder="Mariorosso@gmail.com"
                prefix="Email"
                mb={2}
              />

              <Textarea
                labelColor="#fff"
                label="Message"
                name=""
                id=""
                rows={5}
                placeholder="Write your message here  "
              />

              <Button mt={4} inverse>
                Submit
              </Button>
            </form>
          </FooterColumn>
        </FooterGrid>
      </Container>
    </Section>
  );
};
export default CallUs;
