import { useCallback } from "react";
import { Button, Container } from "../../_shared/styledComponents";
import {
  HeroSection,
  HeroVideo,
  HeroTitle,
  HeroSubTitle,
} from "../../_shared/styledComponents";

import { useNavigate } from "react-router-dom";
import { scrollTo } from "../../_shared/utils/func/scrollTo";
type HeroProps = {
  inverse: boolean;
  title: string;
  subTitle: string;
  button: {
    label: string;
    linkTo: string;
    link: boolean;
  };
  videoSrc: string;
};

export const Hero: React.FC<HeroProps> = ({
  title,
  subTitle,
  button,
  videoSrc,
  inverse,
}) => {
  const navigate = useNavigate();
  const handleClick = useCallback(
    (button: { linkTo: string; link: boolean }) => () => {
      if (button.link) {
        navigate(button.linkTo);
      } else {
        scrollTo(button.linkTo);
      }
    },
    [navigate]
  );

  return (
    <HeroSection>
      <HeroVideo src={videoSrc} autoPlay muted />
      <Container
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        {title && <HeroTitle>{title}</HeroTitle>}
        {subTitle && <HeroSubTitle inverse={true}>{subTitle}</HeroSubTitle>}
        {button && (
          <Button onClick={handleClick(button)} inverse>
            {button.label}
          </Button>
        )}
      </Container>
    </HeroSection>
  );
};
