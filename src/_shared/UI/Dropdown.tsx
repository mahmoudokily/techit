import styled from "styled-components";
import { Box } from "./Box";

export const Dropdown = styled(Box)`
  position: relative;
  display: inline-block;
  border-radius: 5px;

  &:hover .dropdown-content {
    display: block;
  }
  &:hover.dropbtn {
    background-color: #3e8e41;
  }
`;

export const DropdownContent = styled(Box).attrs({
  className: "dropdown-content",
})`
  border-radius: 5px;

  display: none;
  position: absolute;
  // background-color: #f1f1f1;
  // min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #ddd;
  }
`;

export const DropdownHeader = styled(Box).attrs({ className: "dropBtn" })``;
