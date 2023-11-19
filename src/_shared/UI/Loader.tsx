import styled, { keyframes } from "styled-components";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { CSSHelper } from "./helpers/CssHelper";
import { Variant } from "./helpers/types";
import { Typography } from "./Typography";

const SpinnerContainer = styled.div`
  height: 50px;
  width: 200px;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`;

const Dot = styled.div<{ num: number }>`
  transform: none;
  animation: move 1s linear infinite forwards;
  animation-delay: ${({ num }) => num}s;
  width: 25px;
  height: 25px;
  color: white;
  padding: 10px;
  border-radius: 50%;
  z-index: 1;
  @keyframes move {
    0% {
      transform: translateY(0%);
    }
    25% {
      transform: translateY(-40%);
    }
    50% {
      transform: translateY(-80%);
    }
    75% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

type BpLoaderProps = {
  label?: string;
};
export const Loader: React.FC<BpLoaderProps> = ({ label }) => {
  const dots = Array(3).fill(3);

  return (
    <Flex
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        transition: "transform(50% 50%)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SpinnerContainer>
        {label?.split("").map((t, i) => (
          <Dot num={i * 0.2} key={i}>
            <Typography style={{ color: "white" }} variant="body20">
              {t}
            </Typography>
          </Dot>
        ))}
      </SpinnerContainer>
    </Flex>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
type LoaderProps = {
  variant?: Variant;
  size?: 'small' | 'default' | 'large'
};

export const SimpleLoader = styled(Box) <LoaderProps>`
  animation: ${rotate} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid
    ${({ theme, variant = "primary" }) => theme.type[variant].loader?.borderTop};
  border-right: 2px solid
    ${({ theme, variant = "primary" }) =>
    theme.type[variant].loader?.borderRight};
  border-bottom: 2px solid
    ${({ theme, variant = "primary" }) =>
    theme.type[variant].loader?.borderBottom};
  border-left: 4px solid
    ${({ theme, variant = "primary" }) =>
    theme.type[variant].loader?.borderLeft};
  background: transparent;
  ${({ size = 'large', theme }) => `
    width: ${CSSHelper.setIconSize(size, theme)};
    height:${CSSHelper.setIconSize(size, theme)};
  `}
  border-radius: 50%;
`;
Loader.defaultProps = {
  label: "LOADING",
};
