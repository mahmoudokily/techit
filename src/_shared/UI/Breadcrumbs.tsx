import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { AngleLeft } from "../assets/svg";
import { Typography } from "./Typography";
import { Size } from "./helpers/types";

type Props = {
  separator?: string;
  size?: Size;
  withBackButton?: boolean;
};

type CrumpProps = {
  color?: string;
  disabled?: boolean;
};

export const StyledLink = styled(Link)<CrumpProps>`
  word-break: normal;
`;
export const Crumb = styled.li<CrumpProps>`
  display: inline-block;
  &:last-of-type:after {
    content: "";
    padding: 0;
  }
  &:last-of-type {
    ${StyledLink} {
      color: #737373 !important;
      text-decoration: "none";
      cursor: grab;
      &:hover,
      &:active {
        text-decoration: none;
        color: #737373 !important;
      }
    }
  }
  ${StyledLink} {
    color: ${(props) => props.color || props.theme.colors.primary};
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
      color: ${(props) => props.color || props.theme.colors.primary};
    }
  }
`;

export const BreadcrumbsContainer = styled.ul<Props>`
  position: relative;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;
  display: inline-flex;
  & > li:after {
    flex-shrink: 0;

    content: "${(props) => props.separator || "/"}";
    padding: 0 5px;
    color: #737373;
  }
  ${Crumb} {
    font-size: ${({ theme, size = "large" }) => theme.button.fontSize[size]};
  }
`;

export const Breadcrumbs: React.FC<PropsWithChildren<Props>> = ({
  children,
  withBackButton = true,
  ...props
}) => {
  return (
    <BreadcrumbsContainer {...props}>
      <Typography
        alignItems="center"
        display="flex"
        style={{ cursor: "pointer" }}
        px={3}
        onClick={() => window.history.back()}
      >
        {/* {withBackButton && <AngleLeft size="5" fill="#737373" />} */}
      </Typography>
      {children}
    </BreadcrumbsContainer>
  );
};
