import React, { useEffect } from "react";
import { Button, Flex, Typography } from "../../_shared/UI";
import {
  Container,
  ContentButton,
  ContentColumn,
  ContentRow,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureText,
  FeatureWrapper,
  Heading,
  Img,
  ImgWrapper,
  Section,
  SectionTitle,
  Subtitle,
  TextWrapper,
  TopLine,
} from "../../_shared/styledComponents";
import { t } from "i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  label: string;
  data: any[];
};

const Services: React.FC<Props> = ({ label, data }) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
  return (
    <Flex>
      {data.map((el, index) => (
        <Section
          smPadding="50px 10px"
          position="relative"
          inverse={index % 2 === 0}
          id="services"
          ref={ref}
        >
          <Container>
            <ContentRow reverse={index % 2 === 0}>
              <ContentColumn>
                <TextWrapper>
                  {/* <TopLine
                    initial={initial}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    animate={animation}
                  >
                    {t(el.name as string)}
                  </TopLine> */}
                  <Heading
                    initial={initial}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    animate={animation}
                    inverse={index % 2 === 0}
                  >
                    {t(el.name)}
                  </Heading>
                  <Subtitle
                    initial={initial}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    animate={animation}
                    inverse={index % 2 === 0}
                  >
                    {t(el.description)}
                  </Subtitle>
                  <Button
                    // initial={initial}
                    // transition={{ delay: 1, duration: 0.6 }}
                    // animate={animation}
                    $size="large"
                    p={3}
                    // $fill={false}
                    variant={index % 2 === 0 ? "primary" : "light"}
                  >
                    {t("discover more")}
                  </Button>
                </TextWrapper>
              </ContentColumn>
              <ContentColumn
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
              >
                <ImgWrapper>
                  <Flex>
                    <Img
                      src={el.icon}
                      alt={el.name}
                      whileHover={{ rotate: 2, scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    />
                  </Flex>
                </ImgWrapper>
              </ContentColumn>
            </ContentRow>
          </Container>
        </Section>
      ))}
    </Flex>
  );
};

export default Services;
