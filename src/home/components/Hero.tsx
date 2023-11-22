import { useCallback } from "react";
import {
  Button,
  Container,
  HeroSection,
  HeroSubTitle,
  HeroTitle,
  HeroVideo,
} from "../../_shared/styledComponents";

import { useNavigate } from "react-router-dom";
import { scrollTo } from "../../_shared/utils/func/scrollTo";
import { t } from "i18next";
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
    <HeroSection id="hero">
      <HeroVideo src={videoSrc} autoPlay muted />
      <Container
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        {title && <HeroTitle>{t(title)}</HeroTitle>}
        {subTitle && <HeroSubTitle inverse={true}>{t(subTitle)}</HeroSubTitle>}
        {button && (
          <Button onClick={handleClick(button)} inverse>
            {t(button.label)}
          </Button>
        )}
      </Container>
    </HeroSection>
  );
};
