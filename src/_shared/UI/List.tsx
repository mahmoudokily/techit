import { PropsWithChildren } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import WaveEffect from "./WaveEffect";
import Svg from "./Svg";

interface ListItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    SpaceProps {
  selected?: boolean;
  withEffect?: boolean;
  isSelectedParent?: boolean;
}

export const LiElement = styled.li<PropsWithChildren<ListItemProps>>`
  a {
    width: 100%;
    // height: 100%;
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    color: white;
    fill: white;
    text-decoration: none;
  }

  position: relative;
  text-align: left;
  a {
    text-align: left;
  }

  a:hover {
    fill: ${({ theme }) => theme?.colors?.primary}!important;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    color: #3d729c !important;
  }

  ${({ selected, theme }) =>
    selected
      ? `
  a {
    color: ${theme?.colors?.primary}!important;
    background-color:white!important;
    fill:${theme?.colors?.primary};
    font-weight:bold;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
              // border-right :4px solid white;
      >${Svg}{
            fill:${theme?.colors?.primary};

      }

  }
  `
      : ``}
`;

export const List = styled.ul<PropsWithChildren>`
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
  align-items: left;
  flex-direction: column;

  > div {
    width: 100%;
  }

  ${space}
`;

export const ListItem: React.FC<PropsWithChildren<ListItemProps>> = ({
  children,
  withEffect,
  ...props
}) => {
  if (withEffect) {
    return (
      <WaveEffect variant="dark">
        <LiElement {...props}>{children}</LiElement>
      </WaveEffect>
    );
  } else {
    return <LiElement {...props}>{children}</LiElement>;
  }
};

ListItem.defaultProps = {
  withEffect: true,
};
