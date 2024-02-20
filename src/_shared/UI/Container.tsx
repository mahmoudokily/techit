import styled from "styled-components"
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

export const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  height: 100% !important;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100% !important;

  @media ${device.laptop} {
    flex-direction: row;
  }
`
export const Container = styled.div`
  width: 1536px;
  margin: auto;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100% !important;

  @media screen and (max-width: 1536px) {
    width: 1366px;
  }
  @media screen and (max-width: 1366px) {
    width: 1280px;
  }
  @media screen and (max-width: 1280px) {
    width: 1024px;
  }
  @media screen and (max-width: 1024px) {
    width: 768px;
    padding: 0px 20px;
  }
  @media screen and (max-width: 768px) {
    width: 640px;
    padding: 0px 20px;
  }
  @media screen and (max-width: 640px) {
    width: 475px;
    padding: 0px 20px;
  }
  @media screen and (max-width: 475px) {
    width: 380px;
    padding: 0px 20px;
  }
  @media screen and (max-width: 380px) {
    width: 280px;
    padding: 0px 20px;
  }
`
