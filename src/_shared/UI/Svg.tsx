import styled, { css } from "styled-components";
import { CSSHelper } from "./helpers/CssHelper";

type Props = {
  viewBox: string;
  iconSize?: string;
  fill?: string;
  stroke?: string;
};

export default styled.svg<Props>`
  ${({ iconSize = "0.8rem", fill, theme, stroke }) => `
  ${iconSize &&
    `width:${CSSHelper.setIconSize(iconSize, theme)};
     height:${CSSHelper.setIconSize(iconSize, theme)};
  `
    }
 ${stroke ? `stroke:${CSSHelper.setColor(stroke, theme)} ` : ``}
 ${fill ? css`fill:${CSSHelper.setColor(fill, theme)} ` : ``} : 


`}
`;
