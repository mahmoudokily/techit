import { useState } from "react";
import {
  CardButton,
  CarouselImage,
  Container,
  ImageWrapper,
  ReviewSlider,
  Section,
  Typography,
  SectionTitle,
} from "../../_shared/styledComponents";

const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
type CarouselProps = {
  data: {
    title: string;
    description: string;
    image: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [, setSliderRef] = useState(null);

  return (
    <Section margin="auto" inverse>
      <Container display="flex" flexDirection="column">
        <SectionTitle>Find more about us</SectionTitle>
        <ReviewSlider {...sliderSettings} ref={setSliderRef as any}>
          {data.map((el, index) => (
            <ImageWrapper key={index}>
              <CarouselImage src={el.image} />
              <Typography
                fontSize="1.1rem"
                margin="0.4rem 0 0"
                fontWeight="bold"
              >
                {el.title}
              </Typography>
              <Typography
                pb={4}
                fontSize="0.9rem"
                margin="0.7rem"
                color="#4f4f4f"
              >
                {el.description}
              </Typography>
              <CardButton>Learn More</CardButton>
            </ImageWrapper>
          ))}
        </ReviewSlider>
      </Container>
    </Section>
  );
};
export default Carousel;
