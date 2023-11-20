import { useTheme } from "styled-components";
import {
  Section,
  Container,
  FooterGrid,
  FooterColumn,
  SocialIcon,
  FooterLogo,
  FooterAddress,
  FooterRights,
  FooterSocialIcon,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "../../_shared/styledComponents";
import { Row } from "../../_shared/styledComponents";
import {
  footerData,
  footerSocialData,
  paymentImages,
} from "../../_shared/utils/data/footer";
const Footer = () => {
  return (
    <Section padding="4rem 0 2rem 0">
      <Container>
        <FooterGrid justifyContent="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo to="/" inverse={true}>
              <SocialIcon src="./assets/logo.svg" />
              Momuzio
            </FooterLogo>
            <FooterAddress inverse>
              Via Cesare balbo 10 , Busto Arsizio
            </FooterAddress>

            <Row alignItems="center" margin="10px  0 0 0" gridGap="1rem">
              {footerSocialData.map((social: any, index: number) => (
                <FooterSocialIcon
                  key={index}
                  href="/"
                  target="_blank"
                  aria-label={social.name}
                >
                  <social.icon />
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle inverse>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink inverse key={linkIndex} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
        <FooterRights inverse>
          Mahmoud Okily © 2022{" "}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {paymentImages.map((method, index) => {
              return (
                <img
                  key={index + method.name}
                  style={{ margin: "5px 5px 0px 0px" }}
                  src={method.src}
                  alt={method.name}
                  width="30px"
                />
              );
            })}
          </div>
        </FooterRights>
      </Container>
    </Section>
  );
};

export default Footer;
