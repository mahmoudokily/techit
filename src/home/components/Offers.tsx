import { t } from "i18next";
import {
  Container,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureText,
  FeatureWrapper,
  Section,
  SectionTitle,
} from "../../_shared/styledComponents";

type OffersProps = {
  label: string;
  data: {
    name: string;
    description: string;
    icon: any;
    imgClass: string;
  }[];
};
export const Offers: React.FC<OffersProps> = ({ label, data }) => {
  const animate = {
    y: 0,
    opacity: 1,
  };
  const initial = { opacity: 0, y: 30 };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container justifyContent="center" display="flex" flexDirection="column">
        <SectionTitle>{t(label)}</SectionTitle>
        <FeatureWrapper>
          {data.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + index * 0.1 }}
              key={index}
            >
              <FeatureImageWrapper className={el.imgClass}>
                <el.icon size="3rem" color="primary" />
              </FeatureImageWrapper>
              <FeatureName>{t(el.name)}</FeatureName>
              <FeatureText>{t(el.description)}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};
