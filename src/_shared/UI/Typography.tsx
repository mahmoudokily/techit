import { PropsWithChildren, ReactNode, useMemo } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "./CopyToClipboard";
import { DefaultProps, defaultProps } from "./helpers/styledSystem";
import { TypographyType } from "./theme/typography";
export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    Omit<DefaultProps, "color"> {
  variant?: TypographyType | TypographyType[];
  onClick?: any;
  onCopy?: any;
  clipboardText?: string;
  tooltipId?: string;
  tooltipText?: string | ReactNode;
  tooltipPlace?: "bottom" | "top" | "right" | "left";
  tooltipProps?: any;
  capitalizeFirstLetter?: boolean;
  upperCase?: boolean;
  ellipsis?: boolean;
}

const TypographyElement = styled.span<TypographyProps>`
  // display: inline-flex;
  // white-space: nowrap;
  overflow: hidden;
  // text-overflow: ellipsis;
  ${({ variant = "body10", theme }) =>
    css`
      color: ${theme?.colors?.primary};
      font-size: ${theme?.typography[variant as TypographyType]?.fontSize}px;
      font-weight: ${theme?.typography[variant as TypographyType]?.fontWeight};
    `};
  ${defaultProps}
`;
export const Typography = ({
  tooltipId,
  tooltipText,
  tooltipPlace,
  onCopy,
  clipboardText,
  capitalizeFirstLetter,
  upperCase,
  children,
  ...props
}: PropsWithChildren<TypographyProps>) => {
  const { variant, ellipsis } = props;

  const tooltipIdInner = useMemo(() => uuidv4(), []);
  const tooltipProps = useMemo(
    () =>
      tooltipId || tooltipText
        ? { "data-for": tooltipId || tooltipIdInner, "data-tip": true }
        : {},
    [tooltipId, tooltipText, tooltipIdInner]
  );
  const clipboardProps = useMemo(
    () =>
      clipboardText
        ? {
            onClick: (e: React.MouseEvent<HTMLDivElement>) => {
              const el = e.target;
              if (props.onClick) props.onClick();
              const range = document.createRange();
              if (!(el && el instanceof Node && el.contains(el))) {
                range.selectNodeContents(el as Node);
                const sel = window?.getSelection();
                sel?.removeAllRanges();
                sel?.addRange(range);
              }
            },
          }
        : {},
    [clipboardText, props]
  );
  let text = children;
  if (capitalizeFirstLetter && typeof text === "string") {
    text = text[0]?.toUpperCase() + text?.slice(1, text?.length);
  }
  if (upperCase && typeof text === "string") {
    text = text.toUpperCase();
  }

  const childrenText = useMemo(() => {
    let ellipsisStyle = {};
    if (ellipsis) {
      ellipsisStyle = {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      };
    }

    return (
      <TypographyElement
        variant={variant}
        {...clipboardProps}
        {...tooltipProps}
        {...ellipsisStyle}
        {...props}
      >
        {text}
      </TypographyElement>
    );
  }, [ellipsis, variant, clipboardProps, tooltipProps, props, text]);
  return (
    <>
      {clipboardText ? (
        <CopyToClipboard onCopy={onCopy} textToCopy={clipboardText}>
          {childrenText}
        </CopyToClipboard>
      ) : (
        childrenText
      )}
    </>
  );
};
