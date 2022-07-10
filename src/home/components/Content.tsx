import React, { useEffect } from "react";
import { Container, Section } from "../../_shared/styledComponents";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "../../_shared/styledComponents";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

type ContentProps = {
  topText?: string;
  headline: string;
  description: string;

  primary?: boolean;
  reverse?: boolean;
  inverse?: boolean;
  img: {
    src: string;
    alt: string;
    start: string;
  };
  button: {
    label: string;
    linkTo: string;
    primary?: boolean;
  };
};

export const Content: React.FC<ContentProps> = ({
  topText,
  headline,
  description,
  img,
  button,
  inverse,
  reverse,
}) => {
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
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topText}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {button.label}
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img.src}
                alt={img.alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
