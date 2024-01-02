import { motion } from "framer-motion";
import styled from "styled-components";
import { Row, Column, Box, Typography, Container, Section } from "./";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { space, SpaceProps } from "styled-system";
import { AllProps } from "./types";
import Svg from "./Svg";
import HeroBackground from "../../_shared/assets/bgBlue2.jpg";

// Foto di <a href="https://unsplash.com/it/@joshuaryanphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joshua Reddekopp</a> su <a href="https://unsplash.com/it/foto/macbook-pro-su-tavolo-in-legno-marrone-SyYmXSDnJ54?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

type Props = {
  reverse?: boolean;
  inverse?: boolean;
  big?: boolean;
  fontBig?: boolean;
} & SpaceProps;

export const Version = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 10px;
  padding: 10px;
  display: none;
  @media screen and (min-width: 960px) {
    display: block;
  }
`;

export const FixedButton = styled.button`
  position: fixed;
  margin: 20px;
  border-radius: 4px;
  bottom: 0px;
  padding: 8px 5px;
  right: 0;
  z-index: 22200;
  outline: none;
  border: none;
  background-color: rgb(0, 0, 22, 0.3);
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
//header

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 80px;
  flex-shrink: 0;
  min-width: 400px;
  width: 100%;

  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  font-family: "Pacifico", cursive;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const NavIcon = styled(Svg).attrs({ name: "Logo" })`
  margin-right: 0.4rem;
  margin-top: 0.5rem;
  width: 4rem !important;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul<{ show: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    position: fixed;
    padding-top: 20%;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #204ea6;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 1.5rem;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  color: white;

  &:hover {
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

//content
export const ContentRow = styled(motion.div)<Props>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) =>
    reverse === true ? "row-reverse" : "row"};
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const ContentColumn = styled(motion.div)`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > img {
    width: 300px;
    margin-left: -3px;
  }
`;
export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end";
  max-height: 700px;
  justify-content: center;
  position: relative;
`;
export const TopLine = styled(motion.div)<Props>`
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: ${({ theme, inverse }) =>
    inverse ? theme.colors.primary : theme.colors.white};
`;
export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
`;
export const Heading = styled(motion.h2)<Props>`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme, inverse }) =>
    inverse ? theme.colors.primary : theme.colors.white};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const Subtitle = styled(motion.p)<Props>`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: ${({ theme, inverse }) =>
    inverse ? theme.colors.primary : theme.colors.white}!important;
`;

export const ContentButton = styled(motion.button)<Props>`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border:2px solid ;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {

    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
   
  ${space}
`;

//features
export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: 10px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid ${({ theme: { colors } }) => colors.primary}!important;
  padding: 30px;
`;
export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;
  color: ${({ theme: { colors } }) => colors.primary};

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  color: ${({ theme: { colors } }) => colors.primary}!important;

  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
`;

//hero
export const HeroSection = styled(Section)`
  height: 100vh;
  display: flex;
  // justify-content: center;
  background-position: top bottom;
  background-size: cover;
  background-color: white;
  background-image: url(${HeroBackground});

  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;
export const HeroSubTitle = styled(Typography)`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
`;
export const HeroTitle = styled.p`
  font-size: clamp(1.4rem, 4vw, 3rem);
  margin-bottom: 2rem;
  font-family: "Alfa Slab One", cursive;
  width: 100%;
  letter-spacing: 4px;
  text-align: left;
`;
export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
`;

//slider
export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;
export const ImageWrapper = styled.div`
  width: 90%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 4px 4px;
  height: 470px;

  outline: none;
  box-shadow: 0px 1px 5px -2px rgb(0 0 0 / 20%),
    0px 4px 8px 3px rgb(0 0 0 / 14%), 0px 9px 6px 2px rgb(0 0 0 / 12%);
  @media screen and (min-width: 440px) {
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;
  position: relative;

  .slick-track {
    display: flex;
    padding: 40px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const CardButton = styled.button`
  width: 100%;
  flex-shrink: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white}!important;
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.2em;
  opacity: 0.9;
  border: none;

  &:hover {
    opacity: 1;
    transition: background-color 0.2s ease-in;
  }
`;
export const ButtonContainer = styled(Row)`
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;
export const SectionTitle = styled(Typography)`
  color: ${({ theme: { colors } }) => colors.primary}!important;
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin-bottom: 2rem;
`;
//footer

export const FooterGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  justify-content: center;
  align-items: center;
`;
export const FooterColumn = styled(Column)`
  @media screen and (max-width: 999px) {
    align-items: center;
    grid-column: 1/-1;
  }
`;
export const FooterLogo = styled(Link)<AllProps>`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
export const SocialIcon = styled.img`
  margin-right: 10px;
  width: 40px;
`;

export const FooterRights = styled(Typography)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
  width: 100%;
  font-size: 0.8rem;
  border-top: 0.4px solid #ffff;
  text-align: center;
  padding: 1rem 0;
  margin: 1rem 0 0;
`;
export const FooterSocialIcon = styled.a<AllProps>`
  font-size: 24px;
`;

export const FooterAddress = styled(Typography)`
  margin: 0.4rem auto 0.4rem;
  max-width: 20rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 2;
  text-align: center;

  @media screen and (min-width: 1000px) {
    margin-left: 0px;
    text-align: left;
    margin-right: 1rem;
  }
`;

export const FooterSubscription = styled.section<AllProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const FooterLinkTitle = styled(Typography)`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;
export const FooterLink = styled(Link)<AllProps>`
  opacity: 0.9;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    opacity: 1;
    transition: 0.3s ease-out;
  }
`;
//callus

export const Nav = styled.nav<{ show: boolean }>`
  margin-bottom: -80px;
  backdrop-filter: blur(2px);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: ${({ show, theme }) =>
    show ? theme.colors.primary : "transparent"};

  transition: background-color 0.1s ease-in;
`;
